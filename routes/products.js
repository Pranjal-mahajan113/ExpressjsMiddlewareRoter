const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
  res.send("Product Main Page");

  // Product page 1
  router.get("/1", (req, res) => {
    res.send("Product Page 1");
  });

  // Product page 2
  router.get("/2", (req, res) => {
    res.send("Product Page 2");
  });
});

module.exports = router;
