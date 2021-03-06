import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{ id:'abc123', name:'Temi Ojo'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id )
    }
  }
})
