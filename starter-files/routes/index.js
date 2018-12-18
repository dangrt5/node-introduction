const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const randy = { name: "randy", age: 24, drive: true };
  // res.json(randy);
  res.render("hello");
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
