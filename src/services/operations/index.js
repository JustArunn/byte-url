import toast from "react-hot-toast";
import { Fetch } from "../../utils/Fetch";
import { endpoints } from "../apis";
import { addUrl, removeUrl } from "../../Redux/actions";

export function createURL(formData, token, resetForm) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    const data = await Fetch(endpoints.CREATE_URL_API, "POST", formData, token);
    if (data.success) {
      toast.dismiss(toastId);
      dispatch(addUrl(data.url));
      toast.success(data.message);
      resetForm();
    } else {
      toast.dismiss(toastId);
      toast.error(data.message);
    }
  };
}

export function deleteURL(_id, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    const data = await Fetch(
      endpoints.DELETE_URL_API,
      "DELETE",
      { _id: _id },
      token
    );
    if (data.success) {
      toast.dismiss(toastId);
      dispatch(removeUrl(_id));
      toast.error(data.message);
    } else {
      toast.error(data.message);
    }
  };
}
