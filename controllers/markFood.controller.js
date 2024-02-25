const markFood = require("../models/markFood.model");
const { decodeToken } = require("../middleware/decodeToken");
// const getAllFoods = async (req, res) => {
//   try {
//     const users = await markFood.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

const getOneFood = async (req, res) => {
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

const createFood = async (req, res) => {
  try {
    const newUser = new markFood({
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

const updateFood = async (req, res) => {
  try {
    const user = await markFood.findOne({ _id: req.params.id });
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

const deleteFood = async (req, res) => {
  try {
    await markFood.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  // getAllFoods,
  getOneFood,
  createFood,
  updateFood,
  deleteFood,
};
