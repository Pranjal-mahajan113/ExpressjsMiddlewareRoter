const express = require("express");
const PORT = process.env.PORT || 3000;

const productRoutes = require("./routes/products");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HOME PAGE</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT PAGE</h1>");
});

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Your Server running in port ${PORT}`);
});
