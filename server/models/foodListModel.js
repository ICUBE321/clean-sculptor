const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const idType = mongoose.Schema.Types.ObjectId;

const foodListShema = new mongoose.Schema({
  userId: {
    required: true,
    type: idType,
  },
  listName: { required: true, type: String },
  foods: [
    {
      name: {
        required: true,
        type: String,
      },
      alias: {
        required: false,
        type: String,
      },
      image: {
        required: false,
        type: String,
      },
      calories: {
        required: false,
        type: Number,
      },
      unit: {
        required: true,
        type: String,
      },
      carbs: {
        required: true,
        type: Number,
      },
      protein: {
        required: true,
        type: Number,
      },
      fats: {
        required: true,
        type: Number,
      },
      quantity: {
        required: true,
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("FoodList", foodListShema);
