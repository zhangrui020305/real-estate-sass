import axios from 'axios';

// 根据环境自动切换 baseURL
// 开发环境留空（利用上面的 rewrites 转发），生产环境使用真实 URL
const baseURL = process.env.NODE_ENV === 'development' 
  ? '' 
  : process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

// 请求拦截器：自动携带 Token
instance.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器：统一处理错误
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 假设后端统一返回 { code, message, data }
    if (res.code !== 200) {
      // 可以结合 UI 库提示错误，这里简单 reject
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res.data;
  },
  (error) => {
    // 处理 401 未登录等通用错误
    if (error.response?.status === 401) {
      // 重定向到登录页逻辑
    }
    return Promise.reject(error);
  }
);

export default instance;