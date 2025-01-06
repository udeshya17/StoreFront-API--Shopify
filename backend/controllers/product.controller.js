const { fetchApi } = require("../services/product.service");

const fetchProduct = async (req, res) => {
  try {
    const data = await fetchApi();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
    console.log(error)
  }
};

module.exports = { fetchProduct };
