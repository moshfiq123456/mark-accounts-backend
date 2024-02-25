const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  // getAllFoods,
  getOneFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/markFood.controller");

// router.get("/", auth, getAllFoods);
router.get("/:id", auth, getOneFood);
router.delete("/:id", auth, deleteFood);
router.patch("/:id", auth, updateFood);
router.post("/", auth, createFood);

module.exports = router;
