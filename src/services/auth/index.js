import { Fetch } from "../../utils/Fetch";
import { endpoints } from "../apis";
import {
  setLoading,
  setToken,
  setUser,
  setUrls,
  removeToken,
} from "../../Redux/actions";
import toast from "react-hot-toast";

export function login(formData, navigate, resetForm) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loading");
    const { data } = await Fetch(endpoints.LOGIN_API, "POST", formData);
    if (data.success) {
      toast.dismiss(toastId);
      resetForm();
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      toast.success(data.message);
      navigate("/profile");
    } else {
      if (data.message == "All fields are required") {
        navigate("/login");
      } else if (data.message == "Password incorrect") {
        navigate("/login");
      } else {
        resetForm();
        navigate("/signup");
      }
      toast.error(data.message);
      toast.dismiss(toastId);
    }
  };
}

export function logout(navigate) {
  return (dispatch) => {
    toast.error("Logged out");
    dispatch(setLoading(false));
    dispatch(removeToken());
    dispatch(setUser(null));
    dispatch(setUrls(null));
    navigate("/");
  };
}

export function signup(formData, navigate, resetForm) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loading");

    const {data} = await Fetch(endpoints.SINGUP_API, "POST", formData);
    if (data.success) {
      toast.success(data.message);
      dispatch(setToken(data.token));
      toast.dismiss(toastId);
      resetForm();
      navigate("/profile");
    } else {
      toast.dismiss(toastId);
      toast.error(data.message);
      resetForm();
    }
  };
}

export function profile(token, navigate) {
  return async (dispatch) => {
    const {data} = await Fetch(endpoints.PROFILE_API, "GET", null, token);
    if (data.success) {
      dispatch(setUser(data.user));
      dispatch(setUrls(data.user.urls));
    } else {
      dispatch(setLoading(false));
      dispatch(removeToken());
      dispatch(setUser(null));
      dispatch(setUrls(null));
      navigate("/");
    }
  };
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    const {data} = await Fetch(
      endpoints.DELETE_PROFIE_API,
      "DELETE",
      null,
      token
    );
    if (data.success) {
      toast.dismiss(toastId);
      toast.error(data.message);
      dispatch(setLoading(false));
      dispatch(removeToken());
      dispatch(setUser(null));
      dispatch(setUrls(null));
      navigate("/");
    } else {
      toast.dismiss(toastId);
      toast.error(data.message);
    }
  };
}
