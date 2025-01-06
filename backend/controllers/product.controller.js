const { fetchApi, updateShopifyProductApi } = require("../services/product.service");

const fetchProduct = async (req, res) => {
  try {
    const data = await fetchApi();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
    console.log(error)
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await fetchApi();  
    const reqProduct = data.products.find((product) => product.id === parseInt(id));  

    if (reqProduct) {
      res.status(200).json(reqProduct); 
    } else {
      res.status(404).json({ message: `Product with id: '${id}' not found in Shopify` });  
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};



const updateProduct = async (req, res) => {
  const { id } = req.params; 
  const { title } = req.body; 

  try {
    const updatedProduct = await updateShopifyProductApi(id, title);

    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: `Product with id: '${id}' not found in Shopify` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};


module.exports = { fetchProduct, getProductById, updateProduct };
