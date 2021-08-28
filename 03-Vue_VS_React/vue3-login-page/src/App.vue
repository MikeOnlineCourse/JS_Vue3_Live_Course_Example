<script>
  import { provide } from 'vue';
  import { useStore } from './composition-api/useStore.js';
  import Home from './view/Home.vue';
  export default {
    name: 'App',
    components: {
      Home,
    },
    setup() {
      provide('mapStore', useStore());
      return {};
    },
  };
</script>

<template>
  <Home />
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: '微軟正黑體';
    background-color: #233245;
  }
</style>
