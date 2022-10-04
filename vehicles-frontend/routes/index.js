var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cadastro", function (req, res, next) {
  res.sendFile(path.resolve("public/cadastro.html"));
});

module.exports = router;
