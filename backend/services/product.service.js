const axios = require("axios");

const apiKey = process.env.API_KEY;
const apiPass = process.env.API_PASS;
const storeName = process.env.STORE_NAME;
const endpoint = "products";

const URL = `https://${apiKey}:${apiPass}@${storeName}/admin/api/2025-01/${endpoint}.json`;

const fetchApi = async () => {
    // console.log(URL);
  try {
    const response = await axios.get(URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { fetchApi };
