<script>
import { defineComponent, inject, onMounted, ref } from "vue";
import { useFetchUserData } from "../composition-api/useFetchUserData.js";
export default defineComponent({
  setup() {
    const useStore = inject("mapStore");
    const { state } = useStore;
    const { fetchData } = useFetchUserData();
    const userName = ref(state.login);

    const handleUserName = () => {
      fetchData(userName.value);
    };

    onMounted(() => {
      fetchData(userName.value);
    });

    return { state, userName, handleUserName };
  },
});
</script>
<template>
  <div id="title_bar">
    <img class="user_photo" :src="state.avatar_url" alt="" />
    <h1>{{ state.login }}</h1>
    <input type="text" v-model="userName" />
    <button @click="handleUserName">click</button>
  </div>
</template>

<style lang="scss" scoped>
#title_bar {
  margin-bottom: 50px;
  img.user_photo {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid rgb(228, 63, 63);
    margin-bottom: 30px;
  }
}
</style>
