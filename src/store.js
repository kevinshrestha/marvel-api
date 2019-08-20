import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { public_key } from './marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  //ALL DATA IS STORED HERE
  //state defines the data
  state: {

    characters: [],
    character: [],
    url: ''
  },
  
  mutations: {

    //can call getCharacters on any component when setup here
    getCharacters(state) {

      state.characters = []

      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
      .then((result) => {

        //console.log(result)

          result.data.data.results.forEach((item) => {
            
              console.log(item)

              state.characters.push(item)
          })
      })

      .catch((error) => { 

          console.log(error)
        })

    },

    getCharacter(state, id){
      

      state.character = []

      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
      
      .then((result) => {

          console.log(result)

          result.data.data.results.forEach((item) => {

              //instead of this, we put state cause we want our changes to push to state
              state.character.push(item)

              state.url = `${item.thumbnail.path}/`

              // console.log(this.url)
          })
      })
      .catch((error) => {
          console.log(error)
      })

    }
  },

  //we cannot directly call the mutations
  //the actions calls the mutations and changes the state
  //To get data, call action to commit mutations

  actions: {

    getCharacters: context => {

      context.commit('getCharacters')
    },

    getCharacter(context, id) {

      context.commit('getCharacter')
    }
  }
})
