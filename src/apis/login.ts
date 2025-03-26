import { setCookies } from "./cookie";
import { instance } from "./instance";
import { useMutation } from "@tanstack/react-query";

export interface LoginRequest {
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
  setCookies("accessToken", response.data.accessToken);
  setCookies("refreshToken", response.data.refreshToken);
  return response.data;
};

export const useLogin = ({
  setIsShow,
  setIsFail,
  setIsLogin,
  setPassword,
  setXquareId,
}: {
  setIsShow: (value: boolean) => void;
  setIsFail: (value: boolean) => void;
  setIsLogin: (value: boolean) => void;
  setPassword: (value: string) => void;
  setXquareId: (value: string) => void;
}) => {
  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await login(data);
      return response;
    },
    onSuccess: (response) => {
      console.log("로그인 성공", response);
      setIsShow(false);
      setIsFail(false);
      setIsLogin(true);
      setPassword("");
      setXquareId("");
    },
    onError: (error) => {
      console.log("로그인 실패", error);
      setIsFail(true);
    },
  });
};
