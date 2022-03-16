<template lang="pug">
	transition-group(class="popups" tag="div" name="fade" mode="out-in")
		PopupActors(v-if="popupActorsOpen" key="popupActors")
		PopupFrames(v-if="popupFramesOpen" key="popupFrames")
</template>

<script>
import { mapState } from "vuex";
import { qs, addClass, removeClass } from "@/helpers/index";

import PopupActors from "./popups/PopupActors";
import PopupFrames from "./popups/PopupFrames";

export default {
	components: {
		PopupActors,
		PopupFrames,
		
	},
	computed: {
		...mapState({
			popupOpen: state => state.popups.popupOpen,
			popupActorsOpen: state => state.popups.popupActorsOpen,
			popupFramesOpen: state => state.popups.popupFramesOpen,
		})
	},
	watch: {
		popupOpen(val) {
			const body = qs('body');
			val
				? addClass(body, 'popup-open')
				: removeClass(body, 'popup-open')
		}
	}
}
</script>
