import { Fetch } from "../../utils/Fetch";
import { endpoints } from "../apis";
import {
  setLoading,
  setToken,
  setUser,
  setUrls,
  removeToken,
  setUrlLoading,
} from "../../Redux/actions";
import Swal from "sweetalert2";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export function login(formData, navigate, resetForm) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    Swal.fire({
      title:"Processing..",
      didOpen:()=>{
        Swal.showLoading();
      }
    })
    const data = await Fetch(endpoints.LOGIN_API, "POST", formData);

    if (!data.success) {
      Swal.close();
      Swal.fire({
        position: "center",
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      resetForm();
      return;
    } else {
      Swal.close();
      resetForm();
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/profile");
    }
  };
}

export function logout(navigate) {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(setLoading(false));
        dispatch(removeToken());
        dispatch(setUser(null));
        dispatch(setUrls(null));
        navigate("/");
      }
    });
  };
}

export function signup(formData, navigate, resetForm) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    Swal.fire({
      title:"Creating account..",
      didOpen:()=>{
        Swal.showLoading();
      }
    })

    const data = await Fetch(endpoints.SINGUP_API, "POST", formData);
    if (data.success) {
      Swal.close();
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(setToken(data.token));
      resetForm();
      navigate("/profile");
    } else {
      Swal.close();
      Swal.fire({
        position: "center",
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      resetForm();
    }
  };
}

const getDetailListFormat = (urls) => {
  const ListItems = urls.map((url, index) => ({
    _id: url._id,
    key: url._id,
    index: index + 1,
    url: `${BASE_URL}/${url.shortId}`,
    clicks: url.clicks,
    createdAt: url.createdAt.split("T")[0],
  }));
  return ListItems;
};

export function profile(token, navigate) {
  return async (dispatch) => {
    dispatch(setUrlLoading(true));
    const data = await Fetch(endpoints.PROFILE_API, "GET", null, token);

    if (data.success) {
      dispatch(setUser(data.user));

      dispatch(setUrls(getDetailListFormat(data.user.urls)));
      dispatch(setUrlLoading(false));
    } else {
      dispatch(setUrlLoading(false));
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
    Swal.fire({
      title:"Deleting profile..",
      didOpen:()=>{
        Swal.showLoading();
      }
    })
    const data = await Fetch(endpoints.DELETE_PROFIE_API, "DELETE", {}, token);
    if (data.success) {
      Swal.close();
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(setLoading(false));
      dispatch(removeToken());
      dispatch(setUser(null));
      dispatch(setUrls(null));
      navigate("/");
    } else {
      Swal.close();
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
}
