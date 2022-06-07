// import axios from 'axios'
import axios from 'axios'
import { createStore } from 'vuex'
// import posts from './modules/posts'

export default createStore({
  state: {
    counter: 0,
    name: '',
    placeholder: 'Enter Your Name',
    bg: 'purple',
    apis: {
      posts: [],
      comments: [],
      albums: [],
      photos: [],
      users: [],
      todos: []
    }
  },
  mutations: {
      change(state, api) {
        console.log(api[1])
        if (api[1] === 'posts') {
          state.apis.posts = api[0]
        }
        else if (api[1] === 'comments') {
          state.apis.comments = api[0]
        } else if (api[1] === 'albums') {
          state.apis.albums = api[0]
        } else if (api[1] === 'photos') {
          state.apis.photos = api[0]
        }
        else if (api[1] === 'users') {
          state.apis.users = api[0]
        }else if (api[1] === 'todos') {
          state.apis.todos = api[0]
        }
      },
    increaseCounter(state, num) {
      return state.counter += num
    },
    dicreaseCounter(state, num) {
      return state.counter -= num
    },
  },
  actions: {
    async increaseCounter({ commit }, num) {
      await axios.get(`https://www.random.org/integers/?num=1&min=1&max=${num}&col=1&base=10&format=plain&rnd=new`)
        .then(res => {
          console.log(res.data,)
          commit('increaseCounter', res.data)
        })
    },
    async dicreaseCounter({ commit }) {
      await axios.get("https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new")
        .then(res => {
          console.log(res.data)
          commit('dicreaseCounter', res.data)
        })
    },
    async getApis({ commit }, name) {
      try {
        await axios.get(`https://jsonplaceholder.typicode.com/${name}?_limit=10`)
          .then(response => {
            commit('change', [response.data, name])
          })
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    square(state) {
      return state.counter * state.counter
    }
  },
  modules: {}
})
