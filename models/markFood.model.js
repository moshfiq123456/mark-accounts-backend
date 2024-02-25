const mongoose = require("mongoose");

const markFoodSchema = mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  carton: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MarkFood", markFoodSchema);
