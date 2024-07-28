import { useSelector } from "react-redux";
import {
  DetailsListLayoutMode,
  IconButton,
  ShimmeredDetailsList,
} from "@fluentui/react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteURL } from "../services/operations";

function UrlTable() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { urls, isUrlLoading } = useSelector((state) => state.urls);

  function handleCopy(url) {
    navigator.clipboard.writeText(url);
    toast.success("copied");
  }

  function handleDeleteUrl(_id) {
    dispatch(deleteURL(_id, token));
  }

  const columns = [
    {
      key: "column2234",
      name: "Serial",
      fieldName: "index",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column1",
      name: "URL",
      fieldName: "url",
      minWidth: 250,
      maxWidth: 300,
      isResizable: true,
      onRender: (item) => (
        <Link target="_blank" to={item.url}>
          {item.url}
        </Link>
      ),
    },
    {
      key: "column2",
      name: "Clicks",
      fieldName: "clicks",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column3",
      name: "Create At",
      fieldName: "createdAt",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column4",
      name: "Delete",
      minWidth: 100,
      maxWidth: 200,
      onRender: (item) => (
        <IconButton
          iconProps={{ iconName: "Delete" }}
          title="Delete"
          ariaLabel="Delete"
          onClick={() => handleDeleteUrl(item._id)}
        />
      ),
    },
    {
      key: "column5",
      name: "Copy",
      minWidth: 100,
      maxWidth: 200,
      onRender: (item) => (
        <IconButton
          iconProps={{ iconName: "Copy" }}
          title="Copy"
          ariaLabel="Copy"
          onClick={() => handleCopy(item.url)}
        />
      ),
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ShimmeredDetailsList
        columns={columns}
        items={urls || []}
        layoutMode={DetailsListLayoutMode.justified}
        enableShimmer={isUrlLoading}
      />
    </div>
  );
}

export default UrlTable;
