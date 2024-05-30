const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, require: true },
    description: { type: String},
    rating: { type: String, require: true },
}, { timestamp: true, versionKey: false }); 

const ReviewModel = mongoose.model("reviews", databaseSchema);

module.exports = ReviewModel;