<script>
  import { useRegistered } from '../composition-api/useRegistered.js';
  export default {
    setup() {
      const { userData, errorMsg, isCheck, handleSubmit, isSubmit } = useRegistered();

      return { userData, isCheck, handleSubmit, errorMsg, isSubmit };
    },
  };
</script>
<template>
  <div>
    <img class="logo" src="../assets/logo.png" alt="" />
    <div class="input-box">
      <p>NAME</p>
      <input type="text" placeholder="輸入使用者名稱" v-model="userData.username" />
      <p class="error" v-if="errorMsg.username">{{ errorMsg.username }}</p>
    </div>

    <div class="input-box">
      <p>PASSWORD</p>
      <input type="password" placeholder="輸入密碼" v-model="userData.password" />
      <p class="error" v-if="errorMsg.password">{{ errorMsg.password }}</p>
    </div>

    <div class="input-box">
      <p>E-MAIL</p>
      <input type="text" placeholder="輸入email" v-model="userData.email" />
      <p class="error" v-if="errorMsg.email">{{ errorMsg.email }}</p>
    </div>

    <div class="input-box">
      <input type="checkbox" id="checkbox" v-model="isCheck" />
      <label for="checkbox">我已閱讀使用者條款</label>
    </div>

    <button :class="['btn', { disabled: isSubmit }]" @click="handleSubmit">
      {{ isSubmit ? 'Loading...' : '送出' }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
  p,
  label {
    color: white;
    margin-bottom: 3px;
  }
  .logo {
    display: block;
    width: 150px;
    height: auto;
    margin: 0 auto 40px auto;
  }
  input[type='text'],
  input[type='password'],
  input[type='number'] {
    width: 280px;
    height: 30px;
    padding-left: 5px;
  }
  .input-box {
    margin-bottom: 20px;
  }

  input[type='radio'] {
    margin: 0 7px;
  }
  label {
    margin-right: 15px;
  }

  p.error {
    color: rgb(255, 119, 119);
    font-size: 16px;
    padding-top: 4px;
  }
  .btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 280px;
    margin: 30px auto 0 auto;
    padding: 5px 0;
    color: white;
    background-color: skyblue;
    font-size: 20px;
    &.disabled {
      cursor: no-drop;
      background-color: #ddd;
    }
  }
</style>
