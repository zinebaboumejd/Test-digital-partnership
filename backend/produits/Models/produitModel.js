const mongoose = require("mongoose");

const produitSchema = mongoose.Schema(
    {

        nom: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        categorie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categorie",
            required: true,
        },
       

    },
    {
        timestamps: true,
    }
);

const produitModel = mongoose.model("produit", produitSchema);

module.exports = produitModel;