import { Cookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

const cookie = new Cookies();

export const setCookies = (
  name: string,
  value: string,
  options?: CookieSetOptions
) => {
  return cookie.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookie.get(name);
};

export const removeCookie = (name: string) => {
  return cookie.remove(name);
};
