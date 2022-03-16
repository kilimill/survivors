<template lang="pug">
	main.main
		<Header :page="key" />
		.main__content
			<transition name="fade" mode="out-in">
				<router-view :key="key"></router-view>
			</transition>
		Popups
		<Footer :page="key" />
</template>

<script>
import { qs } from "@/helpers/index.js";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Popups from "./components/common/Popups";

import { on_load_mixin } from "./system/statistics";

export default {
	mixins: [
		on_load_mixin
	],
	components: {
		Header,
		Footer,
		Popups
	},
	computed: {
		key() {
			return this.$route.meta.key !== undefined 
				? this.$route.meta.key : this.$route;
		},

	},
	mounted() {
		setTimeout(() => qs(".main").setAttribute("loaded", true), 200);
		setTimeout(() => qs(".main").classList.add("loaded-done"), 1200);
	}
};
</script>

<style lang="stylus">
.main
	pos relative
</style>
