const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        telephone: {
            type: Number,
            required: true,
        },
        adresse: {
            type: String,
            required: true,
        },
        sousDomaine: {
            type: String,
            required: true,
            unique: true,
          },
    },
    {
        timestamps: true,
    }
);

const clientModel = mongoose.model("client", clientSchema);

module.exports = clientModel;