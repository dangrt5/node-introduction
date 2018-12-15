const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // const randy = { age: 24, drives: true };
  // res.json(randy);
  res.send(req.query.name);
});

module.exports = router;
