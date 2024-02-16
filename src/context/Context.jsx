import { createContext, useState } from "react";
import { Fetch } from "../utils/Fetch";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Context = createContext(null);

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

  const login = async (formData) => {
    try {
      setLoading(true);
      const user = await Fetch("/user/login", "POST", formData);
      if (user.success) {
        toast.success(user.message);
        localStorage.setItem("token", user.token);
      }
      setLoading(false);
      navigate("/profile");
    } catch (err) {
      console.log("error in login", err);
    }
  };

  const signup = async (formData) => {
    try {
      setLoading(true);
      const user = await Fetch("/user/signup", "POST", formData);
      if (user.success) {
        localStorage.setItem("token", user.token);
        toast.success(user.message);
        setTimeout(() => navigate("/profile"), 500);
      } else {
        toast.error(user.message);
      }
      setLoading(false);
    } catch (err) {
      console.log("error in singup", err);
    }
  };

  const profile = async () => {
    try {
      if (localStorage.getItem("token")) {
        const user = await Fetch("/user/profile", "GET");
        if (user.success) {
          setUser(user.user);
          setUrls(user.user.urls);
        } else {
          toast.error(user.message);
          localStorage.removeItem("token");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log("error in profile", err);
    }
  };

  const createUrl = async (url) => {
    try {
      setLoading(true);
      const shortUrl = await Fetch("/url/create", "POST", url);
      if (shortUrl.success) {
        toast.success(shortUrl.message);
        setUrls((prev) => [...prev, shortUrl.url]);
      }
      setLoading(false);
    } catch (err) {
      console.log("error in creating url", err);
    }
  };

  const _delete = async (index) => {
    try {
      const id = urls[index].shortId;
      const newUrlfiltedred = urls.filter((h) => h.shortId != id);
      setUrls(newUrlfiltedred);
      const res = await Fetch("/url/delete/", "DELETE", { id });
      toast.success(res.message);
    } catch (err) {
      console.log("error in deletion of url ->", err);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const values = {
    loading,
    setLoading,
    user,
    setUser,
    urls,
    setUrls,
    login,
    signup,
    profile,
    createUrl,
    logout,
    _delete,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
