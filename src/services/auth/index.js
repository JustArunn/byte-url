import { Fetch } from "../../utils/Fetch";
import { endpoints } from "../apis";
import {
  setLoading,
  setToken,
  setUser,
  setUrls,
  removeToken,
  setUrlLoading
} from "../../Redux/actions";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export function login(formData, navigate, resetForm) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loading");
    const data = await Fetch(endpoints.LOGIN_API, "POST", formData);

    if (!data.success) {
      toast.dismiss(toastId);
      toast.error(data.message);
      resetForm();
      return;
    } else {
      toast.dismiss(toastId);
      resetForm();
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      toast.success(data.message);
      navigate("/profile");
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

    const data = await Fetch(endpoints.SINGUP_API, "POST", formData);
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

const getDetailListFormat = (urls)=>{
  const ListItems = urls.map((url, index) => ({
    _id: url._id,
    key: url._id,
    index: index + 1,
    url: `${BASE_URL}/${url.shortId}`,
    clicks: url.clicks,
    createdAt: url.createdAt.split("T")[0],
  }));
  return ListItems;
}

export function profile(token, navigate) {
  return async (dispatch) => {
    dispatch(setUrlLoading(true))
    const data = await Fetch(endpoints.PROFILE_API, "GET", null, token);
    if (data.success) {
      dispatch(setUser(data.user));
      
      dispatch(setUrls(getDetailListFormat(data.user.urls)));
      dispatch(setUrlLoading(false))
    } else {
      dispatch(setUrlLoading(false))
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
    const data = await Fetch(endpoints.DELETE_PROFIE_API, "DELETE", {}, token);
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
