import request from '@/utils/request'; // 假设这是上个回答中封装的 axios
import type { LoginRequest, LoginResponse } from '@/types/auth';

export const loginApi = (data: LoginRequest) => {
  // 发送 POST 请求
  // 前端访问：/api/users/login
  // 经过 Next.js 代理 -> http://localhost:8080/users/login
  return request.post<any, LoginResponse>('/api/users/login', data);
};