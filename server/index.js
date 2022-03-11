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

const product1 = new Product({
    title: "Iphone 13 128GB Sierra Blue",
    description: "",
    rating: 9,
    price: 1649.99,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275",
    tags: ["mobile phone", "iphone", "new"]
})
const product2 = new Product({
    title: "IPhone 12 128GB Blue",
    description: "",
    rating: 8,
    price: 1019.99,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343704000",
    tags: ["mobile phone", "iphone", "new"]
})
const product3 = new Product({
    title: "Macbook Pro 14-Inch",
    description: "",
    rating: 7,
    price: 2499.99,
    image: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202203050918",
    tags: ["macbook","laptop"]
})
const product4 = new Product({
    title: "Urbanista Los Angeles",
    description: "",
    rating: 6,
    price: 279.00,
    image: "https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/b/l/black_losangeles_studio_packshot_2.webp",
    tags: ["headphones"]
})

// product1.save()
// product2.save()
// product3.save()
// product4.save()

app.get("/", (req, res) => {
    Product.find({}, (err,foundProducts) => {
        if (err) console.log(err);
        else res.send(foundProducts);
    })
})



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
