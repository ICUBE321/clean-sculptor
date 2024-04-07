require("express");

const UserModel = require("../models/usermodel");

const getUsers = async (request, response) => {
  try {
    const user = await UserModel.find();
    response.json(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getUserById = async (request, response) => {
  try {
    const user = await UserModel.findById(request.params.id);
    response.json(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const createUser = async (request, response) => {
  const user = new UserModel({
    name: request.body.name,
    email: request.body.email,
  });

  try {
    const userToSave = await user.save();
    response.status(200).json(userToSave);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const updatedUser = request.body;
    const options = { new: true };

    const result = await UserModel.findByIdAndUpdate(id, updatedUser, options);

    response.send(result);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

const deleteUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    response.send(`User ${user.name} has been deleted..`);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
