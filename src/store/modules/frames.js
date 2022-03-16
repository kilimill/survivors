export default {
  namespaced: true,
  state: {
    items: [
      {
        id: 0,
        img: require('@/assets/img/frames/frame-img-3.png'),
        imgBig: require('@/assets/img/frames/frame-img-3.png')
      },
      {
        id: 1,
        img: require('@/assets/img/frames/frame-img-5.png'),
        imgBig: require('@/assets/img/frames/frame-img-5.png')
      },
      {
        id: 2,
        img: require('@/assets/img/frames/frame-img-4.png'),
        imgBig: require('@/assets/img/frames/frame-img-4.png')
      },
      {
        id: 3,
        img: require('@/assets/img/frames/frame-img-1.png'),
        imgBig: require('@/assets/img/frames/frame-img-1.png')
      },
      {
        id: 4,
        img: require('@/assets/img/frames/frame-img-2.png'),
        imgBig: require('@/assets/img/frames/frame-img-2.png')
      },
      {
        id: 5,
        img: require('@/assets/img/frames/frame-img-6.jpg'),
        imgBig: require('@/assets/img/frames/frame-img-6.jpg')
      },
      {
        id: 6,
        img: require('@/assets/img/frames/frame-img-7.jpg'),
        imgBig: require('@/assets/img/frames/frame-img-7.jpg')
      },
      {
        id: 7,
        img: require('@/assets/img/frames/frame-img-8.jpg'),
        imgBig: require('@/assets/img/frames/frame-img-8.jpg')
      },
      {
        id: 8,
        img: require('@/assets/img/frames/frame-img-9.jpg'),
        imgBig: require('@/assets/img/frames/frame-img-9.jpg')
      },
      {
        id: 9,
        img: require('@/assets/img/frames/frame-img-10.jpg'),
        imgBig: require('@/assets/img/frames/frame-img-10.jpg')
      },
    ]
  },
  getters: {
    getFramesById: state => id => state.items.find(item => item.id === id),
  }
}