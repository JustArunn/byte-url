import React from "react";
import { useForm } from "react-hook-form";
import { useService } from "../context";

const CreateUrl = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUrl } = useService();

  return (
    <div>
      <form
        className=" border p-1 rounded-md flex justify-center items-center gap-1"
        onSubmit={handleSubmit((url) => {
          createUrl(url);
          reset();
        })}
      >
        <div className="flex justify-center items-center gap-2 flex-col lg:flex-row">
          <label className="hidden lg:flex font-light" htmlFor="url">
            URL
          </label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Enter URL..."
            {...register("url", { required: true })}
            className="px-3 py-1 rounded-md "
          />
          {errors.url && <span className="text-red-500">URL is required</span>}
        </div>
        <div>
          <button className="border py-1 rounded-md px-4" type="submit">
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUrl;
