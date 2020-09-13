import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  timeout: 10000
})
instance.interceptors.request.use(config => {
  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }
  return config;
});
instance.interceptors.response.use(response => {
  // Do something before response is sent
  return response.data;
}, error => {
  return new Promise(() => { })
});