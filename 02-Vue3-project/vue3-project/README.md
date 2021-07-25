# vue3-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

<br/>

## GITHUB API 

### 取得 github user 公開資料 [User API 文件連結](https://docs.github.com/cn/rest/reference/users#update-the-authenticated-user)


```
GET https://api.github.com/users/{username}
```

| 欄位  | type | 說明 |
| :--  | :-- | :-- |
| avatar_url  | String | 大頭貼照片 |
| html_url  | String | Github連結 |
| repos_url  | String | 取的 repo API 連結 |
| public_repos  | Number | 公開的 repo 數量 |
| created_at  | String | 加入github的時間 |
| updated_at  | String | 最新一次更新github的時間 |

<br/>

### 取得 user 公開 repo 列表 [Repos API 文件連結](https://docs.github.com/cn/rest/reference/repos)
```
GET https://api.github.com/users/{username}/repos
```
| 欄位  | type | 說明 |
| :--  | :-- | :-- |
| name  | String | 專案名稱 |
| owner  | Object | 專案的 owner |
| html_url  | String | repo 的網址 |
| description  | String | 專案的說明 |
| language  | String | 專案的使用語言 |

```
GET https://api.github.com/users/{username}/repos?page=${page}&per_page=${per_page}&sort=pushed
```
| 欄位  | type | 說明 |
| :--  | :-- | :-- |
| page  | Number | 目前的頁碼 |
| per_page  | Number | 一頁幾個項目，最多100個 |
| sort  | string | 排序方式 created、updated、pushed、full_name  |