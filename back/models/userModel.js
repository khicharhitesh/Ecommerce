const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['jeans', 'shirts','T-shirts'], // Only allow these categories
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  img: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: [String],
    required: true,
    enum: ['S', 'M', 'L', 'XL', 'XXL'], // Example sizes
  },
  color: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;