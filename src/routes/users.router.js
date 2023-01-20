const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  createUsers,
  userUpdate,
  deleteUsers,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.get("/users/:id/task", getUserWithTasks);

router.post("/users", createUsers);

router.put("/users/:id", userUpdate);

router.delete("/users/:id", deleteUsers);

module.exports = router;
