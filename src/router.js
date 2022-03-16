import Vue from 'vue';
import Router from 'vue-router';
import data from '../data';

import Index from './views/Index';
import Universe from './views/Universe';

Vue.use(Router);

let routes = [{
		path: "/",
		component: Index,
		name: 'Index',
		meta: {
			key: 1,
		},
	},
	{
		path: "*",
		component: Index,
		name: 'Index',
		meta: {
			key: 101,
		},
	},
	{
		path: "/universe",
		component: Universe,
		name: 'Universe',
		meta: {
			key: 2,
		},
	},
];

if (Object.keys(data.share.dynamic_shares).length > 0) {
	Object.keys(data.share.dynamic_shares).forEach((el) => {
		routes.push({
			path: "/" + el,
			component: Index,
			name: el,
			meta: {
				key: routes.length + 1,
			},
		});
	})
}



const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,

	scrollBehavior(to) {
		return new Promise((resolve) => {
			if(to.hash) {
				setTimeout(() => {
					resolve({
						selector: to.hash,
						behavior: 'smooth'
					})
				}, 1000)
			}
		})
	},
	routes,
})

router.afterEach((to) => {
	// eslint-disable-next-line
	gtag('config', data.statistics.GA_ID, {
		'page_path': to.path
	});
});


if (Object.keys(data.share.dynamic_shares).length > 0) {
	router.beforeEach((to, from, next) => {
		if (data.share.dynamic_shares[to.name] === undefined || data.share.dynamic_shares[to.name] === null) {
			document.querySelector('meta[property="og:image"]')['content'] = data.share.default_img
			document.querySelector('meta[property="og:title"]')['content'] = data.share.title
			document.querySelector('meta[property="og:description"]')['content'] = data.share.description
			document.querySelector('meta[name="twitter:image"]')['content'] = data.share.default_img
		} else {
			document.querySelector('meta[property="og:image"]')['content'] = data.share.dynamic_shares[to.name].img
			document.querySelector('meta[property="og:title"]')['content'] = data.share.dynamic_shares[to.name].title
			document.querySelector('meta[property="og:description"]')['content'] = data.share.dynamic_shares[to.name].description
			document.querySelector('meta[name="twitter:image"]')['content'] = data.share.dynamic_shares[to.name].img
		}
		next()
	});
}


export default router
