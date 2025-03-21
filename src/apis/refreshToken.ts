import { instance } from "./instance";

interface Token {
  accessToken: string;
}

export const refreshToken = async (data: Token): Promise<Token> => {
  const response = await instance.post<Token>("/auth/refresh", data);

  localStorage.setItem("accessToken", response.data.accessToken);

  return response.data;
};
