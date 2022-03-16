<template lang="pug">
section#calendar.calendar.window-height.h-anim.section_for

  .calendar__bg(v-for="image, indexImage of calendar" :key="indexImage" v-if="image.imgBg && !mobile" :style="{ backgroundImage: 'url(' + image.imgBg + ')' }" :class="`calendar__bg--${image.id}`")

  .calendar__bg(v-for="image, indexImage of calendar" :key="indexImage" v-if="image.imgBgMobile && mobile" :style="{ backgroundImage: 'url(' + image.imgBgMobile + ')' }" :class="`calendar__bg--${image.id}`")

  h2.calendar__title.title.title--white.scroll-anim.h-anim
    div.scroll-anim__wrapper
      span.scroll-anim__title Календарь&nbsp
    div.scroll-anim__wrapper
      span.scroll-anim__title выхода&nbsp
    div.scroll-anim__wrapper
      span.scroll-anim__title серий&nbsp
  .calendar__slider-wrap
    swiper.calendar__slider(:options="swiperOption", ref="calendarSliderRef")
      swiper-slide.calendar__slide(
        v-for="item, index of calendar",
        :key="index"
      )
        .calendar__month(v-if="item.month") {{ item.month }}
        .calendar__item(
          :class="[{ 'calendar__item--hov': item.hoverCheck }, { 'calendar__item--available': item.available }]",
          @mouseenter="switchBackground(item.id)",
          @click="clickCalendarItem(item.id)"
        )
          .calendar__info
            p.calendar__item-date {{ item.date }}
            .calendar__item-episodes
              p.calendar__item-episode {{ item.episode }}
              p.calendar__item-episode(v-if="item.episode2") {{ item.episode2 }}
          p.calendar__item-text(v-if="!item.available") Скоро
          .calendar__item-button(v-else)
            a.calendar__item-link.btn.btn_black(
              :href="item.href",
              target="_blank",
              @click="clickCalendarItemLink(item.id)"
            ) 
              PlayBtn.calendar__item-link-play.btn__play
              span.calendar__item-link-text.btn__text Смотреть
    button.swiper-button-prev(type="button", slot="button-prev")
      SwiperArrowLeft
    button.swiper-button-next(type="button", slot="button-next")
      SwiperArrowRight
    .swiper-pagination(slot="pagination")
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { qs, qsAll } from "@/helpers/index.js";

import SwiperArrowLeft from "@/assets/svg/arrow-left_white.svg";
import SwiperArrowRight from "@/assets/svg/arrow-right_white.svg";
import PlayBtn from "@/assets/img/svg/play-btn.svg";

export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        speed: 750,
        slidesPerView: "auto",
        // slidesPerView: "auto",
        spaceBetween: 0,
        preventClicks: false,
        allowTouchMove: true,
        navigation: {
          prevEl: ".calendar .swiper-button-prev",
          nextEl: ".calendar .swiper-button-next",
        },
        pagination: {
          el: ".calendar .swiper-pagination",
          // clickable: true,
          type: "progressbar",
        },
        on: {
          slideNextTransitionStart: () => {
            this.$root.sendGA("internal", "click", "strelka_vpravo_serii");
          },
          slidePrevTransitionStart: () => {
            this.$root.sendGA("internal", "click", "strelka_vlevo_serii");
          },
        },
      },
      calendarData: null
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    SwiperArrowLeft,
    SwiperArrowRight,
    PlayBtn,
  },
  computed: {
    ...mapState({
      calendar: (state) => state.calendar.items,
      mobile: (state) => state.common.mobile,
    }),
    ...mapGetters({
      getCalendarById: "calendar/getCalendarById",
    }),
  },
  methods: {
    switchBackground(id) {
      this.calendarData = this.getCalendarById(id);

      qsAll(`.calendar__bg`).forEach(item => {
        item.classList.remove('show')
      })
      qs(`.calendar__bg--${id}`).classList.add('show')
    },
    clickCalendarItem(id) {
      if (id === 0) {
        this.$root.sendGA("internal", "click", `seriya_1&seriya_2`);
      } else {
        this.$root.sendGA("internal", "click", `seriya_${id + 2}`);
      }
    },
    clickCalendarItemLink(id) {
      if (id === 0) {
        this.$root.sendGA(
          "external",
          "click",
          `seriya_1_smotret&seriya_2_smotret`
        );
      } else {
        this.$root.sendGA("external", "click", `seriya_${id + 2}_smotret`);
      }
    },
  },
  mounted() {
    let activeSlides = (qsAll('.calendar__item--available').length - 1);
    let slider = this.$refs.calendarSliderRef.$swiper
    this.switchBackground(activeSlides)
    slider.slideTo(activeSlides);
    setTimeout(() => qs(".calendar__bg--0").classList.add("show"), 200);
  },
};
</script>