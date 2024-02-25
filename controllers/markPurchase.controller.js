const markPurchase = require("../models/markPurchase.model");
const { decodeToken } = require("../middleware/decodeToken");

// const getAllPurchases = async (req, res) => {
//   try {
//     const users = await markPurchase.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

const getOnePurchase = async (req, res) => {
  const decodedToken = decodeToken(req.header("Authorization"));

  try {
    if (decodedToken.roles !== "super_admin") {
      const user = await markFood.findOne({ _id: req.params.id });
      res.status(200).json(user);
    } else {
      const users = await markFood.find();
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPurchase = async (req, res) => {
  try {
    const newUser = new markPurchase({
      client: req.body.client,
      carton: Number(req.body.carton),
      amount: Number(req.body.amount),
      status: req.body.status,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePurchase = async (req, res) => {
  try {
    const user = await markPurchase.findOne({ _id: req.params.id });
    user.client = req.body.client;
    user.carton = Number(req.body.carton);
    user.amount = Number(req.body.amount);
    user.status = req.body.status;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePurchase = async (req, res) => {
  try {
    await markPurchase.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  // getAllPurchases,
  getOnePurchase,
  createPurchase,
  updatePurchase,
  deletePurchase,
};
