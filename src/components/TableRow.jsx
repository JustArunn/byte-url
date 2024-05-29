import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteURL } from "../services/operations";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function TableRow({ url }) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function handleCopy() {
    navigator.clipboard.writeText(`${BASE_URL}/${url.shortId}`);
    toast.success("copied");
  }
  function handleDeleteUrl(_id) {
    dispatch(deleteURL(_id, token));
  }
  return (
    // <tr className="border border-black">
    //   <td className=" border border-black px-1 py-1">
    //     <Link
    //       className="text-blue-900 font-semibold "
    //       target="_blank"
    //       to={`${BASE_URL}/${url.shortId}`}
    //     >
    //       {`${BASE_URL}/${url.shortId}`}
    //     </Link>
    //   </td>
    //   <td className=" px-1 py-1 flex justify-center items-center">
    //     <button onClick={handleCopy}>
    //       <IoCopyOutline
    //         className=" hover:text-green-600 hover:scale-110"
    //         size={"20px"}
    //       />
    //     </button>
    //   </td>
    //   <td className=" px-1 py-1 border border-black">
    //     <button onClick={() => handleDeleteUrl(url._id)}>
    //       <MdOutlineDelete
    //         className="hover:text-red-600 hover:scale-110"
    //         size={"24px"}
    //       />
    //     </button>
    //   </td>
    // </tr>
    <tr className="border border-black">
      <td className="border border-black truncate max-w-[100px] sm:max-w-full text-blue-800 font-semibold">
        <Link
          className="ml-2"
          target="_blank"
          to={`${BASE_URL}/${url.shortId}`}
        >{`${BASE_URL}/${url.shortId}`}</Link>
      </td>
      <td className="border border-black text-center max-w-[10px]">
        {url.clicks}
      </td>
      <td className="border border-black cursor-pointer" onClick={handleCopy}>
        <div className="flex justify-center items-center">
          <IoCopyOutline size={"20px"} color="green" />
        </div>
      </td>
      <td
        className="border-black border cursor-pointer"
        onClick={() => handleDeleteUrl(url._id)}
      >
        <div className="flex justify-center items-center">
          <MdOutlineDelete size={"25px"} color="red" />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
