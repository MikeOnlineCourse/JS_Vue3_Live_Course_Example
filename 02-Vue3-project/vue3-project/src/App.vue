<script>
import { defineComponent, provide } from "vue";
import TitleBar from "@/components/TitleBar.vue";
import ReposList from "@/components/ReposList.vue";
import store from "@/composition-api/store.js";
export default defineComponent({
  name: "App",
  components: {
    TitleBar,
    ReposList,
  },
  setup() {
    provide("mapStore", store);
    return {};
  },
});
</script>

<template>
  <TitleBar />
  <ReposList />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #ddd;
  padding-bottom: 20px;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 160px;
}
</style>
