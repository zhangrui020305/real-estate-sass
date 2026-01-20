// 对应 Java 的 LoginRequestDTO
export interface LoginRequest {
  username: string; // 假设后端接受 username
  password: string;
}

// 对应 Java 的 LoginResponseDTO
export interface LoginResponse {
  token: string;
  userId: number;
  username: string;
  role: string;
}
