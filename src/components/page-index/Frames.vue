<template lang="pug">
	section.frames.window-height.h-anim(id='frames')
		h2.frames__title.title.scroll-anim.h-anim(v-if="!mobile")
			div.scroll-anim__wrapper
				span.scroll-anim__title Кадры&nbsp
			div.scroll-anim__wrapper
				span.scroll-anim__title из&nbsp
			div.scroll-anim__wrapper
				span.scroll-anim__title сериала
		h2.frames__title.title(v-else) Кадры#[br]из сериала
		.frames__slider-wrap
			swiper(:options="swiperOption" ref="framesSliderRef").frames__slider
				swiper-slide.frames__slide.desk(v-for="item, index of framesData" :key="index")
					.frames__item
						.frames__item-overimg
							img(:src="item.img" alt="").frames__item-img
			button(type="button" slot="button-prev").swiper-button-prev
				SwiperArrowLeft
			button(type="button" slot="button-next").swiper-button-next
				SwiperArrowRight
			.swiper-pagination(slot="pagination")
</template>

<script>

import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import SwiperArrowLeft from '@/assets/svg/arrow-left_black.svg'
import SwiperArrowRight from '@/assets/svg/arrow-right_black.svg'

export default {
  data() {
		return {
			swiperOption: {
				loop: false,
				speed: 750,
				preventClicks: false,
				slidesPerView: 1,
				slidesPerColumn: 2,
				spaceBetween: 20,
				
				navigation: {
					prevEl: '.frames .swiper-button-prev',
					nextEl: '.frames .swiper-button-next',
				},
				pagination: {
					el: '.frames .swiper-pagination',
					// clickable: true,
          type: 'progressbar'
				},
				breakpoints: {
					661: {
            slidesPerView: 'auto',
						slidesPerColumn: false,
						spaceBetween: 50,
          },
				},
				on: {
					slideNextTransitionStart: () => {
						this.$root.sendGA('internal', 'click', 'strelka_vpravo_kadry');
					},
					slidePrevTransitionStart: () => {
						this.$root.sendGA('internal', 'click', 'strelka_vlevo_kadry');
					}
				}
			},
			framesData: null
		}
	},
	components: {
		Swiper,
		SwiperSlide,
    SwiperArrowLeft,
    SwiperArrowRight
	},
  computed: {
		...mapState({
			frames: state => state.frames.items,
			mobile: state => state.common.mobile,
		}),
	},
	methods: {
    showFramePopup(id) {
			this.$root.sendGA('internal', 'click', `kadr_${id+1}`);
			this.$store.commit("popups/setPopupFramesId", id);
			this.$store.commit("popups/setPopupOpen", true);
			this.$store.commit("popups/setPopupFramesOpen", true);
		},
		shuffleFrames(arr) {
			let j, temp;
			for( let i = arr.length - 1; i > 0; i-- ) {
				j = Math.floor(Math.random()*(i + 1));
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
			return arr;
		}
  },
	mounted() {
		this.framesData = this.shuffleFrames(this.frames);
	}
}
</script>