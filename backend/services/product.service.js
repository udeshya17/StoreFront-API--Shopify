const axios = require("axios");

const apiKey = process.env.API_KEY;
const apiPass = process.env.API_PASS;
const storeName = process.env.STORE_NAME;
const endpoint = "products";

// Base URL for Shopify API
const URL = `https://${apiKey}:${apiPass}@${storeName}/admin/api/2025-01/${endpoint}.json`;

// Function to fetch products
const fetchApi = async () => {
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

// Function to update a product on Shopify
const updateShopifyProductApi = async (productId, productData) => {
  const updateUrl = `https://${apiKey}:${apiPass}@${storeName}/admin/api/2025-01/products/${productId}.json`;

  try {
    const payload = {
      product: {
        id: productId,
        title: productData,  
      },
    };

    const response = await axios.put(updateUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.product;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { fetchApi, updateShopifyProductApi };
