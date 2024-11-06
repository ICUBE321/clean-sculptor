const mongoose = require("mongoose");
const idType = mongoose.Schema.Types.ObjectId;

const foodListShema = require("../models/foodListModel");

const foodSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: idType,
  },
  foodLists: [{ type: foodListShema }],
});

module.exports = mongoose.model("Food", foodSchema);
