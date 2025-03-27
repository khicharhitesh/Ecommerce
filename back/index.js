const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const db = require("./config/db");
const Product = require("./models/userModel");

app.get("/", async (req, res) => {
  try {
    // Delete all the data
    await Product.deleteMany({});

    // Insert All products
    const products = [
      {
        name: "Jeans",
        category: "jeans",
        price: 49.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbGPO-02yZ2xgj70RjZJWcMTW7fBmglFlKg&s",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Blue",
        rating: 4.5,
      },
      {
        name: "Levis jeans",
        category: "jeans",
        price: 59.99,
        img: "https://levis.com.au/cdn/shop/files/MB_50155-0098_GLO_CM_DAcopy.jpg?v=1736811160&width=1445",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Black",
        rating: 4.7,
      },
      {
        name: "uspoloassn",
        category: "shirts",
        price: 29.99,
        img: "https://uspoloassn.in/cdn/shop/files/7_dede08bd-51d0-4cf5-88f5-bed063a3d111_1024x.jpg?v=1692213819",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "White",
        rating: 4.3,
      },
      {
        name: "H & M",
        category: "shirts",
        price: 39.99,
        img: "https://image.hm.com/assets/hm/52/10/52105f881ef33f3d7169d696549f9804235b27d2.jpg?imwidth=2160",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Blue",
        rating: 4.6,
      },
      {
        name: "H & M",
        category: "T-shirts",
        price: 69.99,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37_Y0IagwvyqPva37AJXxiJztbrQJ97PQfUyzOfE1lrVo5xfq-oAH_9XXrqrSaC_Jj11KnOdt20yIQiUzWrrrqtxs4MHLEIvBfF-WXAx9&usqp=CAE",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Blue",
        rating: 4.6,
      },
    ];

    await Product.insertMany(products);
    res.send("Products Inserted Successfully");
  } catch (error) {
    res.status(500).json({ message: "Error inserting products", error });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
