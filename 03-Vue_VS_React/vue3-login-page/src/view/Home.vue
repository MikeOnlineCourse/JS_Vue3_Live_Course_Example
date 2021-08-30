<script>
  import { inject } from 'vue';
  import RegisterPage from '../components/RegisterPage.vue';
  export default {
    components: {
      RegisterPage,
    },
    setup() {
      const { isRegister } = inject('mapStore');

      return { isRegister };
    },
  };
</script>
<template>
  <RegisterPage v-if="!isRegister" />
  <div v-else>
    <h1>註冊成功</h1>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    color: aliceblue;
  }
</style>
