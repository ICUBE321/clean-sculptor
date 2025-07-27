require("express");
const { matchedData } = require("express-validator");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const validData = matchedData(request);
    const user = await UserModel.findById(validData.id);
    response.json(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const createUser = async (request, response) => {
  try {
    const validData = matchedData(request);
    const hashedPassword = await bcrypt.hash(validData.password, 10);
    const user = new UserModel({
      name: validData.name,
      email: validData.email,
      password: validData.password,
    });

    const userToSave = await user.save();
    //use of tokens
    const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
      expiresIn: "1h",
    });
    console.log("Valid sign up");
    response.status(200).json({ user: userToSave, token });
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
    if (!result) {
      return response.status(404).send("User not found");
    }

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

const loginUser = async (request, response) => {
  const validData = matchedData(request);
  const email = validData.email;
  const password = validData.password;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      console.log(`Authentication failed - invalid user ${email}`);
      return response.status(401).json({ message: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (password != user.password) {
      console.log(`Authentication failed - invalid password ${password}`);
      return response.status(401).json({ message: "Invalid login" });
    }

    //use of tokens
    const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
      expiresIn: "1h",
    });
    // response.cookie("token", token, {
    //   httpOnly: true,
    // });
    console.log("Valid login");
    return response.status(200).json({ user, token });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
