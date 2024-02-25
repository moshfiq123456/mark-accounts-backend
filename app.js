const express = require("express");
const cors = require("cors");
require("./config/db");

const foodRouter = require("./routes/markFood.route");
const iceCreamRouter = require("./routes/markIcecream.route");
const purchaseRouter = require("./routes/markPurchase.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/foods", foodRouter);
app.use("/api/icecreams", iceCreamRouter);
app.use("/api/purchase", purchaseRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello",
  });
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
