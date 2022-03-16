<template lang="pug">
.page__content
  section#universe.universe.window-height
    h2.universe__title WEB-сериал
    Swiper.universe__slider(
      :options="swiperOption",
      ref="universeSlider",
      @slideChange='check'
    )
      SwiperSlide.universe__slide(
        v-for="item, index in universeData",
        :id="index"
        :key="index"
      )
        .universe__slide-container
          .universe__inner
            .video-play.universe__video
              Play.video-play__img
            video.universe__preview.video(@click='playVideo(item.id, ".universe__preview", ".universe__video")', :poster="item.videoPreview")
              source(:src="item.videoSrc" type="video/mp4")
          .universe__info
            .slider__pag
              .slider__pag-icon
                .slider__pag-num {{ item.number }}
            .universe__info-number {{ item.subtitle }}
          .universe__header
            p.universe__desc(v-html='item.desc')
          a.universe__link.btn.btn_black(
            :href="item.href",
            target="_blank",
            @click="$root.sendGA('external', 'click', `smotret_v_okko_${item.gaLink}`)"
          ) 
            PlayBtn.universe__link-play.btn__play
            span.universe__link-text.btn__text Смотреть в Okko

    button.swiper-button-prev(type="button", slot="button-prev")
      SwiperArrowLeft
    button.swiper-button-next(type="button", slot="button-next")
      SwiperArrowRight

  
  Reference(@previewSlide='previewSlide')
</template>

<script>
import Reference from "@/components/page-universe/Reference.vue";
import { mapState, mapGetters } from "vuex";
import { videoGo } from "@/helpers/index.js";
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import Play from "@/assets/img/svg/trailer-play.svg";
import SwiperArrowLeft from "@/assets/svg/arrow-left_white.svg";
import SwiperArrowRight from "@/assets/svg/arrow-right_white.svg";
import PlayBtn from "@/assets/img/svg/play-btn.svg";
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        speed: 750,
        preventClicks: false,
        slidesPerView: 1,

        navigation: {
          prevEl: ".universe .swiper-button-prev",
          nextEl: ".universe .swiper-button-next",
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
  watch: {
    slidesId: function () {
      this.previewSlide(this.slidesId);
    },
  },
  mounted() {
    this.previewSlide(this.slidesId);
  },
  methods: {
    check() {
      this.previewSlide(this.$refs.universeSlider.$swiper.activeIndex)
    },
    previewSlide(id) {
      this.$store.commit("universe/editId", id);
      this.$refs.universeSlider.$swiper.slideTo(id);
    },
    playVideo(a, b, c) {
      if(this.getUniverseByCheck(a) == false) {
        videoGo(a, b, c);
        this.$root.sendGA("internal", "click", `vselennaya_smotret_video_${a+1}`);
        this.$store.commit('universe/editCheck', a)
      }
    },
  },
  computed: {
    checkActiveSlide() {
      return this.$refs.universeSlider.$swiper.activeIndex;
    },
    ...mapState({
      universeData: (state) => state.universe.universeData,
      slidesId: (state) => state.universe.slidesId,
    }),
    ...mapGetters({
      getUniverseByCheck: "universe/getUniverseByCheck",
    }),
  },
  components: {
    Swiper,
    SwiperSlide,
    Play,
    SwiperArrowLeft,
    SwiperArrowRight,
    PlayBtn,
    Reference,
  },
};
</script>