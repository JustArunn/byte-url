export const Fetch = async (url, method, formData) => {
  try {
    const data = await fetch(`/api${url}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: `${method}`,
      body: method == "GET" ? undefined : JSON.stringify({ ...formData }),
    });

    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    console.log("Error : ", err.message);
    return { err };
  }
};
