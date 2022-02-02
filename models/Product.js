import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
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
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  specifications: {
    type: [ {
      idContent:{type:Number,required:true },
      content:{type:String,required:true },
    }
  ],
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
