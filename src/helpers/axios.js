import { createApp } from "vue";
import axios from "axios";
axios.defaults.baseURL = 'https://x.ghtk.vn/api/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.common['access-control-allow-credentials'] = true
// axios.defaults.headers.common['access-control-allow-headers'] = 'Origin, Content-Type, Authorization, X-Requested-With, X-Auth-Token, staffId, phone, appversion, ismobileapp, apptype, whToken, chatToken'
// axios.defaults.headers.common['access-control-allow-methods'] = 'POST, GET, OPTIONS, PUT, DELETE, HEAD'
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

axios.interceptors.response.use(
  function (res) {
    return res
  },
  function (errors) {
    const config = errors.config
    if (errors.response.status === 401 && !config?.sent) {
      config.sent = true;

      let token = localStorage.getItem("accessToken");
      if (token && token.length) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${token}`
        };
        return axios(config)
      }
    }
    return Promise.reject(errors);
  }
);
const app = createApp()

app.config.globalProperties.$axios = axios;

export { axios };