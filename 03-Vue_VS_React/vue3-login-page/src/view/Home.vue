<script>
  import { inject } from 'vue';
  import LoginPage from '../components/LoginPage.vue';
  export default {
    components: {
      LoginPage,
    },
    setup() {
      const { isRegister } = inject('mapStore');
      return { isRegister };
    },
  };
</script>
<template>
  <LoginPage v-if="!isRegister" />
  <div v-else>
    <h1>註冊成功</h1>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    color: aliceblue;
  }
</style>
