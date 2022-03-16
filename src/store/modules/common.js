export default {
	namespaced: true,
	state: {
		mobile: ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) && window.innerWidth < 660,
		ios: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
	},
};
