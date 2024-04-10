const mongoose = require("mongoose");
const idType = mongoose.Schema.Types.ObjectId;

const foodSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: idType,
  },
  foods: [
    {
      name: {
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
    },
  ],
});

module.exports = mongoose.model("Food", foodSchema);
