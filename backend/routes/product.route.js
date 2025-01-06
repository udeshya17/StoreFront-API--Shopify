const router = require("express").Router();
const {fetchProduct} = require("../controllers/product.controller");

router.get("/", fetchProduct)

module.exports = router;

