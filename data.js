const data = {
	title: '«Выжившие»: постарайся проснуться',
	url: 'https://prosnis.afisha.ru/',
	statistics: {
		YM_ID: 41254644,
		GA_ID: 'UA-88014128-39',
		RMBT_ID: 7447782,
		PAGE_LOAD_EVENT: false
	},
	share: {
		default_img: '/share/share_default.jpg',
		title: '«Выжившие»: постарайся проснуться #проснись',
		description: 'Смотрите в Okko сериал о постапокалипсисе',
		dynamic_shares: {
			// 1: {
			//     img: '/share/share_1.jpg',
			//     title: 'Супрематизм или Supreme',
			//     description: 'Кажется, абстрактная живопись не ваша сильная сторона'
			// },
			// 2: {
			//     img: '/share/share_2.jpg',
			//     title: 'Ретроград в авангарде',
			//     description: 'Про супрематизм и футуризм вы возможно слышали'
			// },
			// 3: {
			//     img: '/share/share_3.jpg',
			//     title: 'Магистр авангардных искусств',
			//     description: 'Ваш следующий шаг - собственная выставка'
			// }
		}
	},
	allPrerenderRoutes: [ //without dynamic_shares
		'/',
	]
}
data.allPrerenderRoutes = data.allPrerenderRoutes.concat(Object.keys(data.share.dynamic_shares).map(el => '/' + el));

module.exports = data;