const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  // getAllIcecream,
  getOneIcecream,
  createIcecream,
  updateIcecream,
  deleteIcecream,
} = require("../controllers/markIcecream.controller");

// router.get("/", auth, getAllIcecream);
router.get("/:id", auth, getOneIcecream);
router.delete("/:id", auth, deleteIcecream);
router.patch("/:id", auth, updateIcecream);
router.post("/", auth, createIcecream);

module.exports = router;
