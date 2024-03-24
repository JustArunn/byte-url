import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createURL } from "../services/operations";

function CreateUrl() {
  const [formData, setFormData] = useState({
    url: "",
  });
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  function resetForm() {
    setFormData({
      url: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createURL(formData, token, resetForm));
  }

  return (
    <div className=" w-full flex justify-center items-center py-4 border border-black rounded-md md:w-[70%]">
      <form
        className="flex justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Enter URL here"
          className=" border placeholder:pl-3 py-1 border-black rounded-md"
          value={formData.url}
          onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
        />
        <div className="py-1 px-3 rounded-md bg-[#e84949] md:bg-transparent md:border md:border-[#e84949] md:hover:bg-[#e84949]">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUrl;
