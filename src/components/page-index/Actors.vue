<template lang="pug">
	section.actors.window-height.h-anim(id='actors')
		h2.actors__title.title.scroll-anim.h-anim
			div.scroll-anim__wrapper
				span.scroll-anim__title Актеры
		.actors__slider-wrap
			swiper(:options="swiperOption" ref="actorsSliderRef").actors__slider
				swiper-slide.actors__slide(v-for="item, index of actors" :key="index")
					.actors__item(@click="showActorsPopup(item.id)")
						.actors__item-overimg
							img(:src="item.img" alt="").actors__item-img
						p.actors__item-name(v-html='item.name')
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
				slidesPerView: 'auto',
				spaceBetween: 0,
				preventClicks: false,
				// allowTouchMove: true,
				navigation: {
					prevEl: '.actors .swiper-button-prev',
					nextEl: '.actors .swiper-button-next',
				},
				pagination: {
					el: '.actors .swiper-pagination',
					// clickable: true,
          type: 'progressbar'
				},
				on: {
					slideNextTransitionStart: () => {
						this.$root.sendGA('internal', 'click', 'strelka_vpravo_aktery');
					},
					slidePrevTransitionStart: () => {
						this.$root.sendGA('internal', 'click', 'strelka_vlevo_aktery');
					}
				}
			}
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
			actors: state => state.actors.items,
		}),
	},
  methods: {
    showActorsPopup(id) {
			this.$root.sendGA('internal', 'click', `akter_${id+1}`);
			this.$store.commit("popups/setPopupActorsId", id);
			this.$store.commit("popups/setPopupOpen", true);
			this.$store.commit("popups/setPopupActorsOpen", true);
		},
  }
}
</script>