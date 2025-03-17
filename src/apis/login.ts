import { instance } from "./instance";

interface LoginRequest {
  deviceToken?: string | null;
  xquareId: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await instance.post<LoginResponse>("/auth/login", data);
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};
