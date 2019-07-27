<template>
    <div>
        <div>
            {{message}}
        </div>
        <button v-on:click="reverse">클릭</button>
        <input v-model="message">
    </div>
</template>


<script>
  export default {
    name: "ReverseWord",
    data() {
      return {
        message: "Super Dev Vue Example"
      }
    },

    methods: {
      reverse() {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
<style>

</style>
