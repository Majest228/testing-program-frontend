import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { AppDipsatch, useAppSelector } from "../store/store";
import { bindActionCreators } from "redux";
import { rootActions } from "../store/root-actions";
import Cookies from "js-cookie";

export const useAppDispatch = () => useDispatch<AppDipsatch>();

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
export const getStoreLocal = (name: string) => {
  if (typeof localStorage !== "undefined") {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }
  return null;
};

export const removeTokensStorage = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

export const saveTokensStorage = (data: any) => {
  Cookies.set("accessToken", data.accessToken, { expires: 1 });
  Cookies.set("refreshToken", data.refreshToken, { expires: 1 });
};

export const saveToStorage = (data: any) => {
  saveTokensStorage(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};

export const useAuth = () => useAppSelector((state) => state.auth)
