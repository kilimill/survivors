export default {
	namespaced: true,
	state: {
		popupOpen: false,
		popupActorsOpen: false,
		popupActorsId: null,
		popupFramesOpen: false,
		popupFramesId: null,

	},
	mutations: {
		setPopupOpen(state, val) {
			state.popupOpen = val;
		},
		setPopupActorsOpen(state, val) {
			state.popupActorsOpen = val;
		},
		setPopupActorsId(state, val) {
			state.popupActorsId = val;
		},
		setPopupFramesOpen(state, val) {
			state.popupFramesOpen = val;
		},
		setPopupFramesId(state, val) {
			state.popupFramesId = val;
		},
	}
};
