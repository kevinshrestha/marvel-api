<template>
    <div>
        <h3>hello this is character.vue</h3>
        <p>{{ this.$route.params.id }}</p>

        <ul>
        <li v-for="char in character">
            {{char.name}}
            {{char.description}}
        </li>
        </ul>
    </div>
</template>

<script>
import {public_key} from '../marvel'
import axios from 'axios'

export default {
    name: 'Character',

    data(){

        return{

            character: [],
        
        }
    },

    mounted(){

        this.getCharacter()
    },

    methods: {

        getCharacter: function(){

            var characterId = this.$route.params.characterId
            
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
            .then((result) => {

                console.log(result)
                result.data.data.results.forEach((item) => {

                    this.character.push(item)
                })
            })
            .catch((error) => {
                console.log(error)
            })

        }
    }

}
</script>

<style lang="css">
</style>
