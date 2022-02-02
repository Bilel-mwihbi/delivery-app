import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: [Number],
    required: true,
  },
  options: {
    type: [
      {
        text: { type: String, required: true }
      }
    ],
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Food || mongoose.model("Food", FoodSchema);
