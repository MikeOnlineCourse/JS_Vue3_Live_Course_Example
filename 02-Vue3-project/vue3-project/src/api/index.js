import axios from "axios";

const githubRequest = axios.create({
  baseURL: "https://api.github.com/",
});

export const apiGetUserData = (username) =>
  githubRequest.get(`/users/${username}`);

export const apiGetGithubRepos = ({ username, page }) =>
  githubRequest.get(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=10&sort=pushed`
  );
