const router = require("express").Router();
const {fetchProduct, getProductById, updateProduct} = require("../controllers/product.controller");

router.get("/getproducts", fetchProduct)

router.get("/:id", getProductById);

router.patch("/:id", updateProduct);

module.exports = router;

