<template>
  <div id="app">
    <img alt="Vue logo" src="./image/logo.png">
    <ReverseWord msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ReverseWord from './components/ReverseWord.vue'

export default {
  name: 'app',
  components: {
    ReverseWord
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
