<template lang="pug">
section#podcast.podcast.window-height.section_for
  .podcast__bg
  swiper.podcast__slider(:options="swiperOption", ref="podcastSlider")
    swiper-slide.podcast__slide(
      v-for="item, index in podcast",
      :key="index"
    )
      .layout__info
        .podcast__left
          h2.layout__title.podcast__title.scroll-anim.h-anim
            .scroll-anim__wrapper
              span.scroll-anim__title Выпуск&nbsp
            .scroll-anim__wrapper
              span.scroll-anim__title {{ item.number }}
          p.layout__subtitle.scroll-anim.h-anim
              span.scroll-anim__text подкаст
          .podcast__descs.hide-text
            p.layout__desc.podcast__desc.scroll-anim.h-anim
              span.scroll-anim__text(v-html='item.desc1')
            p.layout__desc.podcast__desc.scroll-anim.h-anim
              span.scroll-anim__text.layout__block-text(v-html="item.desc2")
          button.podcast__btn-more(@click="showAllText($event, item.id)") Читать далее
        .podcast__video(@click="playVideo(item.id, item.number)")
          .video-play.podcast__play(
            :style="{ backgroundImage: 'url(' + item.imgBg + ')' }"
          )
            Play.video-play__img
          LazyYoutube.podcast__prev(:src="item.videoHref", ref="youtube" maxWidth='auto')

  button.swiper-button-prev(type="button", slot="button-prev")
    SwiperArrowLeft
  button.swiper-button-next(type="button", slot="button-next")
    SwiperArrowRight
  .swiper-pagination(slot="pagination")
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { qsAll } from "@/helpers/index.js";
import { mapState, mapGetters } from "vuex";
import {LazyYoutube} from "vue-lazytube";
import Play from "@/assets/img/svg/trailer-play.svg";
import SwiperArrowLeft from "@/assets/svg/arrow-left_white.svg";
import SwiperArrowRight from "@/assets/svg/arrow-right_white.svg";
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        speed: 750,
        preventClicks: false,
        slidesPerView: 1,

        pagination: {
          el: ".podcast .swiper-pagination",
          type: "progressbar",
        },

        navigation: {
          prevEl: ".podcast .swiper-button-prev",
          nextEl: ".podcast .swiper-button-next",
        },
        
        on: {
          slideNextTransitionStart: () => {
            this.$root.sendGA("internal", "click", "podkasti_strelka_vpravo");
          },
          slidePrevTransitionStart: () => {
            this.$root.sendGA("internal", "click", "podkasti_strelka_vlevo");
          },
        },
      },
    };
  },
  mounted() {
    let slider = this.$refs.podcastSlider.$swiper
    slider.slideTo(slider.slides.length - 1);
  },
  methods: {
    showAllText(e, i) {
      const btn = e.target;
      const innerText = qsAll(".podcast__descs")[i];
      if (!innerText.classList.contains("hide-text")) {
        innerText.classList.add("hide-text");
        btn.innerText = "Читать далее";
        this.$root.sendGA("internal", "click", `vipusk_${i + 1}_skrit`);
      } else {
        innerText.classList.remove("hide-text");
        btn.innerText = "Скрыть";
        this.$root.sendGA("internal", "click", `vipusk_${i + 1}_chitat_dalee`);
      }
    },
    async playVideo(i, number) {
      if (this.getPodcastById(i) === false) {
        await this.$refs.youtube[i].playVideo();
        this.$root.sendGA("internal", "click", `podkast_${number}_smotret`);
        this.searchArr(".podcast__play", "hide", i);
        this.searchArr(".podcast__prev", "pointer", i);
        this.$store.commit("podcast/editCheck", i);
      }
    },
    searchArr(elem, activeClass, index) {
      qsAll(elem).forEach((el, i) => {
        if (i == index) {
          if (!el.classList.contains(activeClass)) {
            el.classList.add(activeClass);
          }
        }
      });
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    LazyYoutube,
    Play,
    SwiperArrowLeft,
    SwiperArrowRight
  },
  computed: {
    ...mapState({
      mobile: (state) => state.common.mobile,
      podcast: (state) => state.podcast.podcast,
    }),
    ...mapGetters({
      getPodcastById: "podcast/getPodcastById"
    }),
  },
};
</script>
