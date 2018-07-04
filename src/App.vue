<template>
  <div id="app">
    <ul>
    <li> <router-link to="/">Users </router-link></li>
    <li> <router-link to="/test">Test </router-link></li>
      <li> <router-link to="/jeffrey">Jeffrey </router-link></li>
    </ul>
    <router-view></router-view>
    
     <!-- <test></test> -->
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Users from './components/Users.vue'
import Jeffrey from './components/Jeffrey.vue'

export default {
  name: 'app',
  components: {
    Test,
    Users,
    Jeffrey
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
