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
export async function Fetch(endpoint, method, formData, token) {
  try {
    return axiosInstance({
      method: method,
      url: endpoint,
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log("Error in Fetch.............", err);
    return { err };
  }
}
