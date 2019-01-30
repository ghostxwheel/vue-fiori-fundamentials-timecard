<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
  import Vue from 'vue'
  import FundamentalVue from 'fundamental-vue'
  import Main from './components/Main.vue'

  Vue.use(FundamentalVue);

  export default {
    name: 'StartApp',
    components: {
      Main
    }
  }
</script>

<style>
</style>
