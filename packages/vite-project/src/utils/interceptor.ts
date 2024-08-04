import Axios from 'axios';

export const interceptor = () => {
  Axios.interceptors.request.use((config) => {
    return { ...config, url: 'https://swapi.dev/api' + config.url };
  });
};
