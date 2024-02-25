const markIcecream = require("../models/markIcecream.model");
const { decodeToken } = require("../middleware/decodeToken");
// const getAllIcecream = async (req, res) => {
//   try {
//     const users = await markIcecream.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

const getOneIcecream = async (req, res) => {
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

const createIcecream = async (req, res) => {
  try {
    const newUser = new markIcecream({
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

const updateIcecream = async (req, res) => {
  try {
    const user = await markIcecream.findOne({ _id: req.params.id });
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

const deleteIcecream = async (req, res) => {
  try {
    await markIcecream.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  // getAllIcecream,
  getOneIcecream,
  createIcecream,
  updateIcecream,
  deleteIcecream,
};
