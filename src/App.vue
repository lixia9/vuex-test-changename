<template>
  <div id="app">
    <button @click="changeName">点击我改变名字</button>
     <button @click="changeAge(20)">点击我改变年龄</button>
    
   <p> {{this.$store.state.home.name}}{{this.$store.state.home.age}}</p>
   <p>{{getName}}</p>
    <router-view/>
  </div>
</template>

<script>
import { mapActions ,mapMutations,mapGetters} from 'vuex'
import types from './type.js'
export default {
  name: 'App',
  data(){
    return{
    
    }
  },
  
  mounted(){
    console.log(this.$store.state.home)
  },
  computed:{
     ...mapGetters({
      'getName':"home/getName"
     })
  },
  methods:{
     ...mapActions({
      'changeName':`${types.HOME.space}${types.HOME.CHNGE_NAME}`
     }),
      ...mapMutations({
        "changeAge":`${types.HOME.space}${types.HOME.CHNGE_AGE}`
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
