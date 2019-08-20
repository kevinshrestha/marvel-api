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
import { mapState } from 'vuex'
import axios from 'axios'

export default {

    name: 'Characters',

    mounted() { 
        
        //calls data from action
        this.$store.dispatch('getCharacters')
        console.log(this.characters)

    },
    computed: {
        ...mapState({
            characters: state => state.characters
        })
    },

    methods:{

  }
}
</script>

<style>

</style>
