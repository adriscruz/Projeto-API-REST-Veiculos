const { Router } = require("express");
const router = Router();

router.post("/", (req, res) => {
  console.log("Test");
});

router.get("/", (req, res) => {
  console.log("Test");
});

router.get("/:id", (req, res) => {
  console.log("Test");
});

router.patch("/:id", (req, res) => {
  console.log("Test");
});

router.delete("/:id", (req, res) => {
  console.log("Test");
});

module.exports = router;
