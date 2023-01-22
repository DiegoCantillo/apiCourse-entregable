const UserServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.userById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.userWithTasks(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUsers = async (req, res) => {
  try {
    const newUsers = req.body;
    const result = await UserServices.userCreate(newUsers);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;
    const field = { firstName, lastName, password }
    const result = await UserServices.updateUser(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.userDeleted(id);
    res.json(result);
  } catch (error) { }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUsers,
  userUpdate,
  deleteUsers,
  getUserWithTasks
};
