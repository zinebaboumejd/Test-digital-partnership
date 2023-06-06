
const asyncHandler = require("express-async-handler");
const Produit = require("../Models/produitModel");

// @desc    Fetch all produits
// @route   GET /api/produits

const getProduits = asyncHandler(async (req, res) => {
    const produits = await Produit.find({});
    res.json(produits);
}

);

// @desc    Fetch single produit
// @route   GET /api/produits/:id

const getProduitById = asyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);
    if (produit) {
        res.json(produit);
    } else {
        res.status(404);
        throw new Error("produit not found");
    }
}

);

// @desc    Delete a produit
// @route   DELETE /api/produits/:id

const deleteProduit = asyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);
    if (produit) {
        await produit.remove();
        res.json({ message: "produit removed" });
    } else {
        res.status(404);
        throw new Error("produit not found");
    }
}
);

// @desc    Create a produit
// @route   POST /api/produits

const createProduit = asyncHandler(async (req, res) => {
    const { nom, slug, stock, categorie } = req.body;
    const produit = new Produit({
        nom,
        slug,
        stock,
        categorie,
    });
    const createdProduit = await produit.save();
    res.status(201).json(createdProduit);
}
);

// @desc    Update a produit
// @route   PUT /api/produits/:id

const updateProduit = asyncHandler(async (req, res) => {

    const { nom, slug, stock, categorie } = req.body;
    const produit = await Produit.findById(req.params.id).populate("categorie", "nom");
    if (produit) {
        produit.nom = nom;
        produit.slug = slug;
        produit.stock = stock;
        produit.categorie = categorie;
        const updatedProduit = await produit.save();
        res.json(updatedProduit);
    } else {
        res.status(404);
        throw new Error("produit not found");
    }
}
);

module.exports = {
    getProduits,
    getProduitById,
    deleteProduit,
    createProduit,
    updateProduit,
};

