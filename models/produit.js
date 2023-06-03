const mongoose = require("mongoose")
const Categorie = require("./categorie.js");
const produitSchema = mongoose.Schema({
    designation: { type: String, required: true, unique: true },
    price: { type: Number, required: false },
    qtestock: { type: Number, required: false },
    imageart: { type: String, required: false },
    categorieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Categorie
    }
})
module.exports = mongoose.model('produit', produitSchema)