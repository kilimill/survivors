<template lang="pug">
	.popup.popup--actors
		button(type="button" @click="closePopup").popup__close-button
		.popup__container
			.popup__content
				.actor(v-if="actorData")
					.actor__overimg
						img(:src="actorData.imgPopup" alt="").actor__img
					.actor__content
						.actor__name-wrap
							p.actor__name(v-html="actorData.name")
							p.actor__age(v-html="actorData.age")
						ul.actor__info-list
							li.actor__info-item(v-for="actorItem, index of actorData.info" :key="index")
								p.actor__info-title {{ actorItem.title }}
								p.actor__info-text {{ actorItem.text }}
						a.actor__link.btn.btn_black(href="https://okko.tv/serial/vyzhivshie?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=button_actors_watch" target="_blank" @click="$root.sendGA('external', 'click', 'smotret_serial')") 
							PlayBtn.actor__link-play.btn__play
							span.actor__link-text.btn__text Смотреть сериал
					.actor__spec
						p.actor__spec-text(v-if='!mobile') Спецпроект
						.actor__spec-bottom
							img.actor__spec-restrictions(src="@/assets/img/actors/restrictions.png" v-if="!mobile")
							img.actor__spec-restrictions(src="@/assets/img/actors/restrictions-mobile.png" v-else)
							span.actor__spec-tag #проснись


</template>

<script>
import { mapState, mapGetters } from "vuex";
import PlayBtn from "@/assets/img/svg/play-btn.svg";

export default {
  data() {
		return {
			actorData: null,
		}
	},
	components: {
		PlayBtn
	},
  computed: {
		...mapState({
			popupActorsId: state => state.popups.popupActorsId,
			mobile: state => state.common.mobile
		}),
		...mapGetters({
			getActorsById: 'actors/getActorsById'
		}),
	},
  methods: {
    closePopup() {
			this.$root.sendGA('internal', 'click', 'aktery_zakryt');
			this.$store.commit("popups/setPopupActorsId", null);
			this.$store.commit("popups/setPopupOpen", false);
			this.$store.commit("popups/setPopupActorsOpen", false);
		}
  },
  mounted() {
		this.actorData = this.getActorsById(this.popupActorsId);
	}
}
</script>