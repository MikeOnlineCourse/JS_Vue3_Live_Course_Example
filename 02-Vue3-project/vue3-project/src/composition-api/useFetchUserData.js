import { ref } from "vue";
import { apiGetUserData } from "../api";
import store from "./store.js";
export function useFetchUserData() {
  const { setUserDate } = store;
  const isload = ref(false);

  const fetchData = async (username) => {
    try {
      const res = await apiGetUserData(username);
      const data = {
        avatar_url: res.data.avatar_url,
        login: res.data.login,
      };
      setUserDate(data);
    } catch (error) {
      console.error("取得user資料錯誤", error);
    }
  };

  return { isload, fetchData };
}
