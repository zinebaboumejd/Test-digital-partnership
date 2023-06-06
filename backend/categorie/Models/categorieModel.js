const mongoose = require("mongoose");

const CategorieSchema = mongoose.Schema(
    {

        nom: {
            type: String,
            required: true,
        },
    
    },
    {
        timestamps: true,
    }
);

const categorieModel = mongoose.model("categorie", CategorieSchema);

module.exports = categorieModel;