<script>
  import { inject } from 'vue';
  import LoginPage from '../components/LoginPage.vue';
  export default {
    components: {
      LoginPage,
    },
    setup() {
      const { isReg } = inject('mapStore');
      return { isReg };
    },
  };
</script>
<template>
  <LoginPage v-if="!isReg" />
  <div v-else>
    <h1>註冊成功</h1>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    color: aliceblue;
  }
</style>
