const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  // getAllPurchases,
  getOnePurchase,
  createPurchase,
  updatePurchase,
  deletePurchase,
} = require("../controllers/markPurchase.controller");

// router.get("/", auth, getAllPurchases);
router.get("/:id", auth, getOnePurchase);
router.delete("/:id", auth, deletePurchase);
router.patch("/:id", auth, updatePurchase);
router.post("/", auth, createPurchase);

module.exports = router;
