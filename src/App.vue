<template>
    <div id="app">
        <snb-component></snb-component>
        <router-view/>
    </div>
</template>

<script>

  import Snb from './components/main/Snb/snb'


  export default {
    name: 'app',
    components: {
      'snb-component': Snb,
    }
  }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }

</style>
