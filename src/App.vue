<template>
    <div id="app">
        <snb-component></snb-component>
        <router-view id="contents-wrap"/>
    </div>
</template>

<script>
  import Snb from '@/components/main/Snb/snb'

  export default {
    name: 'app',
    components: {
      'snb-component': Snb,
    },

    created() {
      window.addEventListener('beforeunload' , this.closeHandler)
    },
    methods : {
      closeHandler() {
        delete localStorage.userAccessToken
      }
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

    input{border:none;border:solid 1px #ccc;}
    textarea{border:none;border:solid 1px #ccc;}
    button{border:none;border:solid 1px #ccc;}

    input:focus , textarea:focus, button:focus{
        outline: none;
    }


    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }

    #contents-wrap {
        width:95%;
        height: 100%;
        float: right;
        position: relative;
    }

</style>
