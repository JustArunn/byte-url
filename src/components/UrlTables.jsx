import React from "react";
import { useService, useUrls } from "../context";
import SingleRow from "./SingleRow";

const UrlTables = () => {
  const { _delete } = useService();
  const { urls } = useUrls();
  return (
    <div>
      {urls.length >= 1 ? (
        <table className="border ">
          <thead className="border ">
            <tr className="text-center">
              <td className="border p-1 text-sm hidden lg:inline-block">
                S No.
              </td>
              <td className="border p-1 text-sm ">Short URL</td>
              <td className="border p-1 text-sm ">Copy</td>
              <td className="border p-1 text-sm ">delete</td>
              <td className="hidden text-sm p-1  lg:inline-block">
                Redirect URL
              </td>
              {/* <td className="hidden text-sm p-1 lg:inline-block">Created at</td> */}
            </tr>
          </thead>
          <tbody>
            {urls.reverse().map((url, index) => {
              return (
                <SingleRow
                  key={index}
                  index={index}
                  url={url}
                  _delete={_delete}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-red-500 font-semibold text-2xl">No URLs !</div>
      )}
    </div>
  );
};

export default UrlTables;
