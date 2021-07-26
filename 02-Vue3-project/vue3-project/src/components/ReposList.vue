<script>
import { defineComponent, onMounted, watch, inject } from "vue";
import { useScrollDown } from "../composition-api/useScrollDown.js";
import { useFetchRepos } from "../composition-api/useFetchRepos.js";
export default defineComponent({
  setup() {
    const useStore = inject("mapStore");
    const { state } = useStore;
    const { isDown } = useScrollDown();
    const { init, isLoad, next, resetData } = useFetchRepos();

    watch(isDown, (newVal) => {
      if (!newVal) return;
      next();
    });

    watch(
      () => state.login,
      () => {
        resetData();
        init();
      }
    );

    onMounted(() => {
      init();
    });

    return { state, isLoad };
  },
});
</script>
<template>
  <div id="repos">
    <div class="card" v-for="item in state.reposList" :key="item.id">
      <h1>{{ item.name }}</h1>
      <a class="repo_url" :href="item.html_url" target="_blank">
        {{ item.html_url }}
      </a>
      <div class="star">
        <img src="../assets/star.svg" alt="" />
        <p>{{ item.stargazers_count }}</p>
      </div>
    </div>

    <h1 v-show="!isLoad">Loading...</h1>
  </div>
</template>

<style lang="scss" scoped>
#repos {
  .card {
    width: 500px;
    background-color: #fff;
    padding: 15px;
    margin-bottom: 20px;
    > h1 {
      margin-bottom: 10px;
    }
    > a.repo_url {
      font-size: 22px;
      text-decoration: none;
    }
    .star {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 15px;
    }
  }
}
</style>
