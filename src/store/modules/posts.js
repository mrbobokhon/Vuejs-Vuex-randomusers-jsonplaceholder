import axios from "axios"

export default {
    state: {
        counter: 0,
        name: '',
        placeholder: 'Enter Your Name',
        bg: 'purple',
      },
      mutations: {
        addUsers(state, ne){
            console.log(ne)
        },
        increaseCounter(state, num) {
          return state.counter += num
        },
        dicreaseCounter(state, num) {
          return state.counter -= num
        },
      },
      actions: {
          async increaseCounter({ commit }) {
            await axios.get("https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new")
              .then(res => {
                console.log(res.data)
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
      },
      getters: {
        square(state){
          return state.counter * state.counter  
        }
      },
}