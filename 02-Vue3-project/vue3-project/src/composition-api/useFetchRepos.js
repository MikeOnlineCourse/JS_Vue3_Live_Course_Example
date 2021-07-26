import { ref } from "vue";
import { apiGetGithubRepos } from "../api";
import store from "./store";
export function useFetchRepos() {
  const { state, setReposList, resetReposList } = store;
  const isLoad = ref(false);
  const pageIdx = ref(0);
  const targetData = ref([]);

  const init = async () => {
    pageIdx.value += 1;
    const data = {
      username: state.login,
      page: pageIdx.value,
    };
    try {
      const res = await apiGetGithubRepos(data);
      isLoad.value = true;
      setReposList(res.data);
      targetData.value = res.data;
    } catch (error) {
      console.error("取得Repos錯誤", error);
    }
  };

  const next = () => {
    if (targetData.value.length === 0) return;
    isLoad.value = false;
    init();
  };

  const resetData = () => {
    isLoad.value = false;
    pageIdx.value = 0;
    targetData.value = [];
    resetReposList();
  };

  return { init, isLoad, next, resetData };
}
