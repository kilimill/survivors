<template lang="pug">
	.popup.popup--frame
		button(type="button" @click="closePopup").popup__close-button
		.popup__container
			.popup__content
				.frame(v-if="frameData")
					.frame__overimg
						img.frame__img(:src="frameData.imgBig" alt="")
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
		return {
			frameData: null,
		}
	},
  computed: {
		...mapState({
			popupFramesId: state => state.popups.popupFramesId,
			mobile: state => state.common.mobile,

		}),
		...mapGetters({
			getFramesById: 'frames/getFramesById',
			getFramesMobileById: 'frames/getFramesMobileById'
		}),
	},
  methods: {
    closePopup() {
			this.$root.sendGA('internal', 'click', 'kadry_iz_seriala_zakryt');
			this.$store.commit("popups/setPopupFramesId", null);
			this.$store.commit("popups/setPopupOpen", false);
			this.$store.commit("popups/setPopupFramesOpen", false);
		}
  },
  mounted() {
		this.frameData = this.getFramesById(this.popupFramesId);
	}
}
</script>