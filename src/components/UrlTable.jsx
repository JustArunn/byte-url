import { useSelector } from "react-redux";
import {
  DetailsListLayoutMode,
  IconButton,
  ShimmeredDetailsList as DetailsList,
  SelectionMode,
} from "@fluentui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteURL } from "../services/operations";
import Swal from "sweetalert2";

function UrlTable() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { urls, isUrlLoading } = useSelector((state) => state.urls);

  function handleCopy(url) {
    navigator.clipboard.writeText(url);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Copied",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  function handleDeleteUrl(_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteURL(_id, token)).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "URL has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  }

  const columns = [
    {
      key: "column2234",
      name: "Serial",
      fieldName: "index",
      minWidth: 100,
    },
    {
      key: "column1",
      name: "URL",
      fieldName: "url",
      minWidth: 250,
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
    },
    {
      key: "column3",
      name: "Create At",
      fieldName: "createdAt",
      minWidth: 100,
    },
    {
      key: "column4",
      name: "Delete",
      minWidth: 100,
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
      <DetailsList
        columns={columns}
        items={urls || []}
        layoutMode={DetailsListLayoutMode.justified}
        enableShimmer={isUrlLoading}
        selectionMode={SelectionMode.none}
      />
    </div>
  );
}

export default UrlTable;
