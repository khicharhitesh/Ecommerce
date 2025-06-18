const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const db = require("./config/db.js");
const Product = require("./models/userModel.js");
db();

app.get("/", async (req, res) => {
  try {
    // Delete all the data
    await Product.deleteMany({});

    // Insert All products
    const products = [
      {
        name: " H & M Straight Regular Jeans",
        category: "jeans",
        price: 49.99,
        img: "https://image.hm.com/assets/hm/8b/ea/8bea8bac07ed75596e5597f6d2997f07cfd81fac.jpg?imwidth=657",
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
        color: "Blue",
        rating: 4.7,
      },
      {
        name: "	U.S. Polo Assn. Denim Co. Solid Slim Shirt",
        category: "shirts",
        price: 29.99,
        img: "https://uspoloassn.in/cdn/shop/files/7_dede08bd-51d0-4cf5-88f5-bed063a3d111_1024x.jpg?v=1692213819",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Grey (39)",
        rating: 4.3,
      },
      {
        name: "H & M Regular Fit Oxford shirt",
        category: "shirts",
        price: 39.99,
        img: "https://image.hm.com/assets/hm/52/10/52105f881ef33f3d7169d696549f9804235b27d2.jpg?imwidth=657",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Blue",
        rating: 4.2,
      },
      {
        name: "H & M Loose Fit Printed T-shirt",
        category: "T-shirts",
        price: 69.99,
        img: "https://image.hm.com/assets/hm/1d/32/1d322ec7125bcde6f369df01a55b5e074ba949d9.jpg?imwidth=2160",
        size: ["S", "M", "L", "XL"], // Now an array as per schema
        color: "Black",
        rating: 4.6,
      },
      {
        name:"U.S. Polo Assn. Denim Co.",
        category:"shirts",
        price:70.99,
        img:"https://cdn09.nnnow.com/web-images/large/styles/XS6G8Q9J6TL/1720431197723/1.jpg",
        size: ["S", "M", "L", "XL"],
        color:"Beige",
        rating:4.5,
      },
      {
        name:"U.S. Polo Assn. Striped Collar Solid Polo Shirt",
        category:"T-shirts",
        price:80.99,
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwz3wO8zt9dkIfrWWgP1CffVljr5m3R2Oi98RQT6JsQcZQYDIZpgJZxr1y1b5u93c1kASgz-h-66_MkWk_wJOLkaqXB07GWrd_6s00Vob1Auq4SW8d0n5Mgg&usqp=CAE",
        size: ["S", "M", "L", "XL"],
        color:"Blue (M)",
        rating:4.5,
      },
      {
        name:"Puma Mercedes Amg Petronas Motosports Mens Black T-Shirt",
        category:"T-shirts",
        price:90.99,
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAtK8lk91-tmR65LondE_dNXWHx0s9dX5BIchsPsvUz4xdNHpjAmPXrD-Hi2jhplMH1T4ZclFzA4F5CuYYQ6Lpb5PttvB8n-F9XKbLtK6Z",
        size: ["S", "M", "L", "XL"],
        color:"Black (M)",
        rating:4.5,
      }

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
