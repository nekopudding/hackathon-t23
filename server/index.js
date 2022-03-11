const { Int32 } = require("bson");
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/productDB');
}

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  price: Number, 
  image: String,
  tags: [String]
});

const Product = new mongoose.model("Product", productSchema);

const product = new Product({
    title: "car",
    description: "a nice car",
    rating: 8,
    price: 5.99,
    image: "https://via.placeholder.com/150",
    tags: ["vehicle"]
})

app.get("/", (req, res) => {
    Product.find({}, (err,foundProducts) => {
        if (err) console.log(err);
        else res.send(foundProducts);
    })
})



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
