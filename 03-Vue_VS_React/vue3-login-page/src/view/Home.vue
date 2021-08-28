<script>
  import RegisterPage from '../components/RegisterPage.vue';
  export default {
    components: {
      RegisterPage,
    },
    setup() {
      return {};
    },
  };
</script>
<template>
  <RegisterPage />
  <div>
    <h1>註冊成功</h1>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    color: aliceblue;
  }
</style>
