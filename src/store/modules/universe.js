export default {
	namespaced: true,
	state: {
    slidesId: 0,
    universeData: [
      {
        id: 0,
        number: 1,
        subtitle: '3200 км',
        desc: '<span>Максим-менеджер нефтяной компании находится в&nbsp;командировке в&nbsp;Нижневартовске. В&nbsp;Москве у&nbsp;него жена и&nbsp;дочь. За&nbsp;это время в&nbsp;Москве вспыхивает эпидемия вируса. В&nbsp;командировке в&nbsp;числе других сотрудников находится руководитель&nbsp;PR отдела Лена. Она давно влюблена в&nbsp;Максима, год назад у&nbsp;них закончился короткий, но&nbsp;бурный роман. Пользуясь тем, что они далеко от&nbsp;дома, Лена пытается вернуть отношения. Тем временем эпидемия начинает набирать обороты и&nbsp;обстановка в&nbsp;Москве становится все хуже. Жена Максима заболевает. Отменяются авиаперелеты и&nbsp;Максим не&nbsp;может вернуться домой. Он&nbsp;принимает решение самостоятельно поехать до&nbsp;Москвы на&nbsp;машине. В&nbsp;попутчики ему навязывается Лена.</span>',
        videoSrc: require('@/assets/video/universe/3200.mp4'),
        videoPreview: require('@/assets/img/universe/prev-3200.jpg'),
        href: 'https://okko.tv/serial/vyzhivshie-3200-km?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=spin_off_3200 ',
        checkPlay: false,
        gaLink: '3200km'
      },
      {
        id: 1,
        number: 2,
        subtitle: 'Благие намерения',
        desc: '<span>Спасаясь от&nbsp;преследования и&nbsp;получив ранение в&nbsp;ногу, Глеб встречает Захара, который помогает ему. Но&nbsp;вместо благодарности Глеб убивает его. У&nbsp;Глеба созревает план: добраться до&nbsp;дома Захара и&nbsp;занять его место рядом с&nbsp;молодой женой. Она вынуждена мириться с&nbsp;этим, поскольку всем нужна пара, чтобы просыпаться.</span>',
        videoSrc: require('@/assets/video/universe/blagie_namereniya.mp4'),
        videoPreview: require('@/assets/img/universe/prev-blagie.jpg'),
        href: 'https://okko.tv/serial/vyzhivshie-blagie-namerenija?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=spin_off_namerenija',
        checkPlay: false,
        gaLink: 'blagie_namereniya'
      },
      {
        id: 2,
        number: 3,
        subtitle: 'Блогггер',
        desc: '<span>Каждый переживает апокалипсис по-своему: кто-то убивает и&nbsp;мародерит, кто-то строит мир с&nbsp;нуля, а&nbsp;кто-то вообще не&nbsp;выжил. А&nbsp;вот наш герой Гоша стал блогером. Он&nbsp;бежал из&nbsp;города, обустроил заброшенную кирху для комфортной жизни и&nbsp;начал снимать свои супер-лайфхаки по&nbsp;выживанию: как приготовить ежа на&nbsp;костре из&nbsp;мелков, добыть электричество из&nbsp;лимонов или газ из&nbsp;коровьего навоза. В&nbsp;каждой серии на&nbsp;кирху Гоши набредают незваные гости, которых очень привлекает продуманное жилище и&nbsp;полезные ресурсы, однако, каждого из&nbsp;них ждет находчивый и&nbsp;хитроумный отпор.</span>',
        videoSrc: require('@/assets/video/universe/blogger.mp4'),
        videoPreview: require('@/assets/img/universe/prev-bloggger.jpg'),
        href: 'https://okko.tv/serial/vyzhivshie-bloggger?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=spin_off_bloggger',
        checkPlay: false,
        gaLink: 'bloggger'
      },
      {
        id: 3,
        number: 4,
        subtitle: 'Огни',
        desc: '<span>Виктор страдает агорафобией и&nbsp;компульсивным расстройством. Страх, порожденный болезнью, не&nbsp;позволяет ему покинуть деревенский дом бабушки, в&nbsp;который его привезли родители до&nbsp;начала эпидемии. Но&nbsp;все это до&nbsp;тех пор, пока на&nbsp;связь по&nbsp;рации не&nbsp;выходит девушка Ника, которая попала в&nbsp;беду. Теперь, чтобы спасти&nbsp;ее, Виктору нужно побороть свой страх и&nbsp;выйти из&nbsp;дома.</span>',
        videoSrc: require('@/assets/video/universe/ogni.mp4'),
        videoPreview: require('@/assets/img/universe/prev-ogni.jpg'),
        href: ' https://okko.tv/serial/vyzhivshie-ogni?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=spin_off_ogni',
        checkPlay: false,
        gaLink: 'ogni'
      },
      {
        id: 4,
        number: 5,
        subtitle: 'Подростки',
        desc: '<span>Группа подростков, воспитанников детского дома, в&nbsp;течение нескольких месяцев пробирается на&nbsp;юг, к&nbsp;морю. Если для взрослых катастрофа и&nbsp;эпидемия означает необходимость выживать в&nbsp;экстремальных условиях, то&nbsp;этим детям не&nbsp;привыкать бороться за&nbsp;свою жизнь.</span>',
        videoSrc: require('@/assets/video/universe/podrostki.mp4'),
        videoPreview: require('@/assets/img/universe/prev-podrostki.jpg'),
        href: 'https://okko.tv/serial/vyzhivshie-podrostki?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=spin_off_podrostki',
        checkPlay: false,
        gaLink: 'podrostki'
      },
      // {
      //   id: ,
      //   number: ,
      //   subtitle: '',
      //   desc: '<span></span>',
      //   videoSrc: require('@/assets/video/universe/'),
      //   videoPreview: require('@/assets/img/universe/'),
      //   href: '',
      //   checkPlay: false,
      //   gaLink: ''
      // },
    ]
  },
  getters: {
		getUniverseByCheck: state => id => state.universeData[id].checkPlay
	},
	mutations: {
		editCheck(state, id) {
			state.universeData[id].checkPlay = true;
		},
		editId(state, id) {
			state.slidesId = id;
		},
    rebootCheck(state) {
			state.universeData.forEach(el => {
				el.checkPlay = false;
			});
		}
	}
}