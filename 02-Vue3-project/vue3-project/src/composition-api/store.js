import { reactive } from "vue";
const state = reactive({
  reposList: [],
  avatar_url: "",
  login: "MikeCheng1208",
});

const setReposList = (repos) => {
  state.reposList = [...state.reposList, ...repos];
};

const setUserDate = ({ avatar_url, login }) => {
  state.avatar_url = avatar_url;
  state.login = login;
};

const resetReposList = () => {
  state.reposList = [];
};

export default { state, setReposList, setUserDate, resetReposList };
