const express = require('express');
const mongoose = require('mongoose');
const Product = require("./model/products");
const productRoute = require("./routes/product.route");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//get products
app.get('/', (req, res) => {
  res.send("FUCK OFF MY API IS SUPERB");
});

mongoose.connect("mongodb+srv://ehigideon517:laWuuNGcSxD0Jb0n@apicheck.jl17m.mongodb.net/?retryWrites=true&w=majority&appName=apiCheck")
  .then(() => {
    console.log('connecting to  database');
    app.listen(3000, () => {
      console.log("running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });



