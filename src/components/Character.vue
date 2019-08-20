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

        <img :src="url" alt="">
    </div>
</template>

<script>
import {public_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Character',

    data(){

        return{
            
            url: '',
            size: 'standard_large.jpg',
        
        }
    },
    mounted(){

        this.$store.dispatch('getCharacter', this.$route.params.id)

        this.getImage();

    },

    computed: {
        ...mapState({
            character: state => state.character,
            preUrl: state => state.url
        })
    },

    methods: {
        
        // getCharacter: function(){

        //     var characterId = this.$route.params.characterId
            


        // },

        getImage: function(){

            this.url = `${this.preUrl}${this.size}`
        }


    }

}
</script>

<style lang="css">
</style>
