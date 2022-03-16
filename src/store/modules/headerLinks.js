export default {
  namespaced: true,
  state: {
    links: [
      {
        id: 0,
        title: 'О сериале',
        href: '#index',
        ga: 'o_seriale',
      },
      {
        id: 1,
        title: 'Трейлер',
        href: '#trailer',
        ga: 'trejler',
      },
      {
        id: 2,
        title: 'Календарь',
        href: '#calendar',
        ga: 'calendar',
      },
      {
        id: 3,
        title: 'Кадры из сериала',
        href: '#frames',
        ga: 'kadry_iz_seriala',
      },
      {
        id: 4,
        title: 'Актеры',
        href: '#actors',
        ga: 'aktery',
      },
      {
        id: 5,
        title: 'Серии',
        href: '#episode',
        ga: 'series',
      },
      {
        id: 6,
        title: 'Подкаст',
        href: '#podcast',
        ga: 'podkasti',
      },
    ],
    linksDrop: [
      {
        id: 0,
        title: '3200 км',
        ga: '3200km',
        disabled: false,
      },
      {
        id: 1,
        title: 'Благие намерения',
        ga: 'blagie_namereniya',
        disabled: false,
      },
      {
        id: 2,
        title: 'Блогггер',
        ga: 'blogger',
        disabled: false,
      },
      {
        id: 3,
        title: 'Огни',
        ga: 'ogni',
        disabled: false,
      },
      {
        id: 4,
        title: 'Подростки',
        ga: 'podrostki',
        disabled: false,
      },
      {
        id: 5,
        title: 'Сено',
        ga: 'seno',
        disabled: true,
      },
      {
        id: 6,
        title: 'Яна',
        ga: 'yana',
        disabled: true,
      },
      {
        id: 7,
        title: 'Иона',
        ga: 'iona',
        disabled: true,
      },
    ]
  }
}