const express = require("express");
require("dotenv").config();
const cors = require("cors");  
const getProduct = require("./routes/product.route");

const server = express();
const PORT = 8020;
server.use(express.json());

server.use(cors());



server.use("/", getProduct);


server.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
});
