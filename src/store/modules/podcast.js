export default {
	namespaced: true,
	state: {
		podcast: [
			{
				id: 0,
				number: 1,
				desc1: '<span>Добро пожаловать в&nbsp;подкаст про мир сериала &laquo;Выжившие&raquo;! В&nbsp;нём кинокритик Егор Москвитин с&nbsp;гостями обсуждают механики серий, историю их&nbsp;создания и&nbsp;множество спин-оффов, которые будут выходить одновременно с&nbsp;основным сериалом.<span>',
				desc2: '<span>Первый гость — Гавриил Гордеев (Гавр), медиаменеджер и продюсер. Вместе с Егором он обсудит, как на съёмки сериала повлияла пандемия, есть ли сейчас спрос на мрачные истории, а в конце решит, подойдут ли «Выжившие» зарубежной аудитории.</span>',
				imgBg: require('@/assets/img/podcasts/preview1.jpg'),
				videoHref: 'https://www.youtube.com/watch?v=V3QcM-bNoZQ',
				checkPlay: false
			},
			{
				id: 1,
				number: 2,
				desc1: '<span>Второй эпизод посвящен медицинской достоверности всего, что происходит в&nbsp;&laquo;Выживших&raquo;. Ее&nbsp;вместе с&nbsp;Егором Москвитиным разбирает врач-терапевт Дмитрий Василенко.</span>',
				desc2: '<span>В выпуске вы узнаете:</span><span>— Реалистична ли эпидемия для болезни без</span><span>инкубационного периода?</span><span>— Могут ли мир захватить вирусы-грибки</span><span>из The Last of Us..?</span><span>—… а мутанты из Fallout?</span><span>— Можно ли на самом деле жить нормально,</span><span>если спишь по часу в день</span>',
				imgBg: require('@/assets/img/podcasts/preview2.jpg'),
				videoHref: 'https://www.youtube.com/watch?v=qsfufIi5ljk',
				checkPlay: false
			},
			{
				id: 2,
				number: 3,
				desc1: '<span>Третий эпизод подкаста расскажет о&nbsp;том, чего на&nbsp;самом деле стоит бояться в&nbsp;будущем и&nbsp;разберёт ошибки героев сериала. На&nbsp;этот раз &laquo;Выживших&raquo; с&nbsp;Егором Москвитиным разбирает футуролог Данила Медведев.</span>',
				desc2: '<span>В выпуске вы узнаете:</span><span>— Зачем вообще нужна футурология</span><span>— Какого персонажа не хватает «Выжившим»</span><span>— Почему сложно найти нормальные фильмы и сериалы про будущее</span><span>— Как закончится сериал по мнению футуролога, который посмотрел всего четыре серии</span>',
				imgBg: require('@/assets/img/podcasts/preview3.jpg'),
				videoHref: 'https://www.youtube.com/watch?v=uUgy_csz8Y4',
				checkPlay: false
			},
			{
				id: 3,
				number: 4,
				desc1: '<span>В&nbsp;четвёртом эпизоде &laquo;Выживших&raquo; поговорим с&nbsp;сотрудником МЧС Алексеем Соколовым про&nbsp;то, нужно&nbsp;ли запасаться консервами впрок на&nbsp;случай чрезвычайной ситуации и&nbsp;насколько достоверно в&nbsp;сериале действуют спасатели.</span>',
				desc2: '<span>В выпуске вы узнаете:</span><span>— Знают ли в МЧС, что делать в случае прилёта инопланетян</span><span>— Кому в апокалипсис проще — горожанам или селянам?</span>',
				imgBg: require('@/assets/img/podcasts/preview4.jpg'),
				videoHref: 'https://www.youtube.com/watch?v=mEQtoEGE5uA',
				checkPlay: false
			},
			{
				id: 4,
				number: 5,
				desc1: '<span>В&nbsp;пятом эпизоде &laquo;Выживших&raquo; обсудим с&nbsp;кинокритиком Егором Беликовым роуд-муви: почему окружение в&nbsp;них становится главным героем, какие у&nbsp;этого жанра характерные черты и&nbsp;что посмотреть тем, кто хочет узнать о&nbsp;нём больше.</span>',
				desc2: '<span>Из выпуска вы узнаете:</span><span>— Что будет, если столкнуть двух кинокритиков Егоров в одном подкасте</span><span>— Как быть, если фильмов нужно посмотреть много, а жизнь короткая</span><span>— Какие есть антиподы «Выжившим» и, наоборот, похожие на них фильмы</span>',
				imgBg: require('@/assets/img/podcasts/preview5.jpg'),
				videoHref: 'https://www.youtube.com/watch?v=26_eb1p-Ohg',
				checkPlay: false
			},
			{
				id: 5,
				number: 6,
				desc1: '<span>В&nbsp;шестом эпизоде сериал препарирует психолог&nbsp;&mdash; Ольга Китаина, основательница сервиса по&nbsp;подбору психологов Альтер. В&nbsp;собеседниках у&nbsp;неё, как всегда, Егор Москвитин, кинокритик.</span>',
				desc2: '<span>Из выпуска вы узнаете:</span><span>— Снимают ли хорошие сериалы о психотерапии?</span><span>— Насколько реалистично показаны психические расстройства в «Выживших»</span><span>— Досматривать ли сериал, если герой в нём чересчур аморальный?</span>',
				imgBg: require('@/assets/img/podcasts/preview6.jpg'),
				videoHref: 'https://www.youtube.com/watch?v=yb-jn0InqU4',
				checkPlay: false
			},
			
		]
	},
	getters: {
		getPodcastById: state => id => state.podcast[id].checkPlay,
	},
	mutations: {
		editCheck(state, id) {
			state.podcast[id].checkPlay = true;
		},
		rebootCheck(state) {
			state.podcast.forEach(el => {
				el.checkPlay = false;
			});
		}
	}
};
