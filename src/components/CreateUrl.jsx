import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createURL } from "../services/operations";
import { PrimaryButton, TextField } from "@fluentui/react";
import Swal from "sweetalert2";

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
    if(formData.url === ""){
      Swal.fire({
        title:"Please enter a URL",
        icon: "warning",
      })
    }else{
      dispatch(createURL(formData, token, resetForm));
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "10px",marginBottom:"20px" }}>
            <TextField
              autoComplete="off"
              type="url"
              name="url"
              placeholder="Enter URL here"
              value={formData.url}
              onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
              styles={{ root: { width: "100%" } }}
            />
            <PrimaryButton type="submit">Create</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUrl;
