<template lang="html">
    <div>  
        <h3>Hello this is characters.vue</h3>

        <ul>
            <li v-for="character in characters">
                <router-link :to="{ name: 'character', params: { id: character.id } }">{{character.name}}</router-link>
                {{character.name}}
            </li>
        </ul>

    </div>
</template>

<script>
import { public_key, secret_key } from '../marvel';
import axios from 'axios'

export default {

    name: 'Characters',

    data(){

        return{

            characters: []
       
        }
    },

    mounted() { 

        this.getCharacters()
    
    },

    methods:{

    getCharacters: function() {
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
      .then((result) => {

          console.log(result)

          result.data.data.results.forEach((item) => {
              console.log(item)

              this.characters.push(item)
          })
      })
      .catch((errr) => console.log.error)
    }
  }
}
</script>

<style>

</style>
