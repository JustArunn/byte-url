import { useSelector } from "react-redux";
import TableRow from "./TableRow";

function UrlTable() {
  const { urls } = useSelector((state) => state.urls);
  return (
    <div className="w-full h-full mt-10 rounded-lg flex justify-center items-center md:w-[70%] mb-10 md:mb-0">
      <table className="w-full h-full rounded">
        <thead>
          <tr>
            <td className="border border-black px-1 py-1">URL</td>
            <td className="border border-black px-1 py-1">Copy</td>
            <td className="border border-black px-1 py-1">Delete</td>
          </tr>
        </thead>
        <tbody className="border border-black">
          {urls?.length > 0 &&
            urls.map((url) => <TableRow key={url.shortId} url={url} />)}
        </tbody>
      </table>
    </div>
  );
}

export default UrlTable;
