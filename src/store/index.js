import { createStore } from 'vuex'

export default createStore({
  state: {
    data: [],
    searchedTitle: '',
    triedOnce: false 
  },
  mutations: {
    setData ( state, data ) {
      state.searchedTitle = data.title
      state.data = data.responseData.filter(el => {
        return el.title.includes(data.title)
      })
      if (state.searchedTitle.length === 0) {
        state.data = []
      }
    },
    notFound( state, data ) {
      state.triedOnce = data
    }
  },
  actions: {
    async setData({commit}, title) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?q=lorem')
      const responseData = await response.json()
      
      commit('setData', {
        title: title,
        responseData: responseData
      })
    }
  },
  getters: {
    getData ( state ) {
      return state.data
    },
    title( state ) {
      return state.searchedTitle
    },
    triedOnce( state ) {
      return state.triedOnce
    } 
  }
})
