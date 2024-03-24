export async function Fetch(endpoint, method, formData, token) {
  try {
    const data = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: method,
      body: formData ? JSON.stringify({ ...formData }) : null,
    });
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    console.log("Error in Fetch.............", err);
    return { err };
  }
}
