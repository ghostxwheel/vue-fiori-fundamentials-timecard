<template>
  <FdShell>
    <Header />
    <App />
  </FdShell>
</template>

<script>
  import Header from './Header.vue'
  import App from './App.vue'

  export default {
    name: 'Main',
    components: {
      Header, App
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
