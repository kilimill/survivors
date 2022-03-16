<template lang="pug">
section#episode.episode.window-height.section_for
  swiper.episode__slider(:options="swiperOption", ref="seriaSlider")
    swiper-slide.episode__slide(v-for="item, index in series", :key="index")
      .episode__info.layout__info
        .episode__left
          h2.layout__title.episode__title.scroll-anim.h-anim
            .scroll-anim__wrapper
              span.scroll-anim__title Серия&nbsp
            .scroll-anim__wrapper
              span.scroll-anim__title {{ item.number }}
          p.layout__subtitle.scroll-anim.h-anim
            span.scroll-anim__text трейлер
          p.layout__desc.episode__desc.scroll-anim.h-anim
            span.scroll-anim__text(v-html='item.desc')
          .episode__links
            a.episode__link.btn.btn_white.scroll-anim__btn.h-anim(:href="item.href",
              target="_blank",
              @click="$root.sendGA('external', 'click', `pizod_${item.number}-x_smotret`)") 
              PlayBtn.episode__link-play.btn__play
              span.episode__link-text.btn__text Смотреть серию
        .episode__video(v-if='item.video && !mobile')
          .video-play.episode__play
            Play.video-play__img
          video.episode__prev(@click="play($event, item.id)" :poster="item.imgBg" v-if='!mobile')
            source(:src='item.video' type="video/mp4")

  button(type="button" slot="button-prev").swiper-button-prev
    SwiperArrowLeft
  button(type="button" slot="button-next").swiper-button-next
    SwiperArrowRight
  .swiper-pagination(slot="pagination")
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapState, mapGetters } from "vuex";
import PlayBtn from "@/assets/img/svg/play-btn.svg";
import SwiperArrowLeft from "@/assets/svg/arrow-left_white.svg";
import SwiperArrowRight from "@/assets/svg/arrow-right_white.svg";
import Play from "@/assets/img/svg/trailer-play.svg";
import { qsAll } from "@/helpers/index.js";
export default {
  data() {
    return {
      lastSlide: null,
      swiperOption: {
        loop: false,
        speed: 750,
        preventClicks: false,
        slidesPerView: 1,

        pagination: {
					el: '.episode .swiper-pagination',
          type: 'progressbar'
				},

        navigation: {
          prevEl: ".episode .swiper-button-prev",
          nextEl: ".episode .swiper-button-next",
        },
        on: {
          slideNextTransitionStart: () => {
            this.$root.sendGA("internal", "click", "strelka_vpravo_series");
          },
          slidePrevTransitionStart: () => {
            this.$root.sendGA("internal", "click", "strelka_vlevo_series");
          },
        },
      },
    };
  },
  methods: {
    play(e, index) {
      if (this.getSeriesById(index) === false) {
        qsAll('.episode__play').forEach((el, i) => {
          if(i == index) {
            if (!el.classList.contains('hide')) {
              el.classList.add('hide')
            }
          }
        })
        var user = navigator.userAgent;
        let video = e.target;
        if (user.search(/Chrome/) > 0 || user.search(/Safari/) > 0) {
          video.webkitEnterFullscreen();
        } else {
          video.requestFullscreen();
        }
        video.controls = true;
        this.$store.commit("series/editCheck", index);
      }
    },
  },
  mounted() {
    let slider = this.$refs.seriaSlider.$swiper
    slider.slideTo(slider.slides.length - 1);
  },
  computed: {
    ...mapState({
      mobile: (state) => state.common.mobile,
      series: (state) => state.series.series,
    }),
    ...mapGetters({
			getSeriesById: 'series/getSeriesById'
		}),
  },
  components: {
    PlayBtn,
    Swiper,
    SwiperSlide,
    SwiperArrowLeft,
    SwiperArrowRight,
    Play
  },
};
</script>
