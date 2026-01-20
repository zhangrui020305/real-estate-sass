"use client"; // 必须标记为客户端组件，因为我们要处理 onClick

import { useState } from "react";
import { useRouter } from "next/navigation"; // 用于跳转
import { loginApi } from "@/api/user"; // 引入上面的 API

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // 1. 调用接口
      const res = await loginApi({ username, password });

      // 2. 拿到结果 (res已经是后端返回的 data 了，因为在拦截器里解包过)
      console.log("登录成功:", res);

      // 3. 存储 Token (通常存 localStorage 或 Cookie)
      localStorage.setItem("token", res.token);

      // 4. 跳转首页
      router.push("/dashboard");
    } catch (error) {
      console.error("登录失败:", error);
      alert("账号或密码错误");
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-sm">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="用户名"
        className="border p-2 rounded text-black"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密码"
        className="border p-2 rounded text-black"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        登录
      </button>
    </div>
  );
}
