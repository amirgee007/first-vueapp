<template>
  <div id="app">


    <router-link to="/">Users </router-link> |
    <router-link to="/test">Test </router-link> |
    <router-link to="/jeffrey">Jeffrey </router-link> |
    <router-link to="/max">Max </router-link> |
  
    <router-view></router-view>
    
     <!-- <test></test> -->
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Users from './components/Users.vue'
import Jeffrey from './components/Jeffrey.vue'
import Max from './components/Max.vue'

export default {
  name: 'app',
  components: {
    Test,
    Users,
    Jeffrey,
    Max
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
