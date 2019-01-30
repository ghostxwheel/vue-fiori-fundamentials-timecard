<template>
  <FdApp>
    <FdAppMain>
      <FdSection>
        <FdCalendar/>
      </FdSection>
      <FdSection>
      <Table/>
      </FdSection>
    </FdAppMain>
  </FdApp>
</template>

<script>
  import Table from "./Table.vue";

  export default {
    name: "App",
    components: {
      Table
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
