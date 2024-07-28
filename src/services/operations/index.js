import { Fetch } from "../../utils/Fetch";
import { endpoints } from "../apis";
import { addUrl, removeUrl } from "../../Redux/actions";
import Swal from "sweetalert2";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getDetailListFormat = (urls) => {
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

export function createURL(formData, token, resetForm) {
  return async (dispatch) => {
    Swal.showLoading();
    const data = await Fetch(endpoints.CREATE_URL_API, "POST", formData, token);
    if (data.success) {
      Swal.hideLoading();
      const listUrl = getDetailListFormat([data.url]);
      dispatch(addUrl(listUrl[0]));
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      resetForm();
    } else {
      Swal.hideLoading();
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

export function deleteURL(_id, token) {
  return async (dispatch) => {
    Swal.showLoading();
    const data = await Fetch(
      endpoints.DELETE_URL_API,
      "DELETE",
      { _id: _id },
      token
    );
    if (data.success) {
      Swal.hideLoading();
      dispatch(removeUrl(_id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
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
