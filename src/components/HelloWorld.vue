


<!--
 v-bind 속성은 디렉티브라고 부르며
 디렉티브는 Vue에서 제공하는 특수 송석을 나타내는 v- 접두어가 붙어있다.
 렌더링 된 DOM에 특수한 반응형 동작을 하게 한다 .

-->


<template>
  <div id="app2">
    <div v-if="liked">좋아연!</div>
    <button  v-on:click="onclick" v-bind:title="message">
        헬로우월드!
    </button>
    <div class="user-div" v-for="user in users" v-bind:key="user.idx">
        {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name:"HelloWorld",
  data(){
    return {
      liked : false ,
      message : "마우스를 올렸다아~~" ,
      users : [
        {idx:1, name:`최윤진` , age:27},
        {idx:2, name:`장동건` , age:45},
        {idx:3, name:`원빈` , age:40},
        {idx:4, name:`하정우` , age:36},
      ]
    }
  },

  methods : {
    onclick(){
      alert(1);
      this.liked = true;
    }
  }
}
</script>
<style>
    @import "../assets/stylesheets/HelloWorld.css";
</style>

