const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, require: true }
},{ timestamp: true, versionKey: false });

const WishModel = mongoose.model("wishes", databaseSchema);

module.exports = WishModel;