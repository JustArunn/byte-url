// export async function Fetch(endpoint, method, formData, token) {
//   try {
//     const data = await fetch(endpoint, {
//       headers: {
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       method: method,
//       body: formData ? JSON.stringify({ ...formData }) : null,
//     });
//     const jsonData = await data.json();
//     return jsonData;
//   } catch (err) {
//     console.log("Error in Fetch.............", err);
//     return { err };
//   }
// }

import axios from "axios";
const axiosInstance = axios.create({});
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function Fetch(endpoint, method, formData, token) {
  try {
    const data = await axiosInstance({
      baseURL: BASE_URL,
      method: method,
      url: endpoint,
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (err) {
    console.log("axios err ", err.response.data);
    return err.response.data;
  }
}
