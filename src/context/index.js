import { useContext } from "react";
import { Context } from "./Context";

export const useLoading = () => {
  const { loading, setLoading } = useContext(Context);
  return { loading, setLoading };
};

export const useUser = () => {
  const { user, setUser } = useContext(Context);
  return { user, setUser };
};

export const useUrls = () => {
  const { urls, setUrls } = useContext(Context);
  return { urls, setUrls };
};

export const useAuth = () => {
  const { login, signup, profile, logout } = useContext(Context);
  return { login, signup, profile, logout };
};

export const useService = () => {
  const { createUrl, _delete } = useContext(Context);
  return { createUrl, _delete };
};
