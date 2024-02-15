import React from "react";
import { Link } from "react-router-dom";
import { LuCopy } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/Fetch";

const SingleRow = ({ url, index, _delete }) => {
  return (
    <tr className="border text-sm">
      <td className="hidden lg:inline-block text-center p-1">{index}</td>

      <td className="border text-center p-1 text-blue-500">
        <Link to={`${BASE_URL}/${url.shortId}`} target="_blank">
          {BASE_URL}/{url.shortId}
        </Link>
      </td>

      <td className="border p-1 text-green-500 hover:scale-105">
        <LuCopy
          onClick={() => {
            navigator.clipboard.writeText(`${BASE_URL}/${url.shortId}`);
            toast.success("copied");
          }}
          className="text-center ml-3 text-xl"
        />
      </td>

      <td className="border p-1 text-red-500 hover:scale-105">
        {
          <MdOutlineDeleteOutline
            onClick={() => {
              _delete(index);
            }}
            className="text-center ml-3 text-2xl"
          />
        }
      </td>

      <td className="hidden  lg:inline-block lg:p-2 text-center">
        {url.originUrl}
      </td>
      {/* <td className="hidden lg:inline-block lg:p-2 text-center">
        {url.createdAt?.split("T")[0]}
      </td> */}
    </tr>
  );
};

export default SingleRow;
