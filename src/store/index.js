import { createStore } from 'vuex'

//create new store instance
const store = createstore({
  state: {
    currentText: {},
    texts: [{
      id:1,
      title: "Présentation",
      image: require(),
      text:"Bonjour, je m' appelle Axel j'ai 26 ans et en 2021 en période de pandémie j'ai pris conscience que le métier que j'exercer depuis mes 17 ans ne m'épanouissais plus et de fil en aiguille j'en suis venu a me reconvertir.",
    },{
      id: 1,
      title: "La Restauration",
      image: require(),
      text:"",
    }, {
      id: 1,
      title: "Le Développement Web",
      image: require(),
      text:"",
    }]
  }
})

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
