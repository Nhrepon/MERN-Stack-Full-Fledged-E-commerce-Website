const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String },
    price: { type: String },
    discount: { type: Boolean },
    discountPrice: { type: String },
    image: { type: String },
    star: { type: String },
    stock: { type: String },
    remark: { type: String },
    categoryId: { type: mongoose.Schema.Types.ObjectId },
    brandId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamp: true, versionKey: false }); 

const ProductModel = mongoose.model("products", databaseSchema);

module.exports = ProductModel;