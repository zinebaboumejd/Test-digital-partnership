
const asyncHandler = require("express-async-handler");
const Categorie = require("../Models/categorieModel");

// @desc    Fetch all categorie
// @route   GET /api/categorie

const getCategories = asyncHandler(async (req, res) => {
    const categorie = await Categorie.find({});
    res.json(categorie);
}
);

// @desc    Fetch single categorie
// @route   GET /api/categorie/:id

const getcategorieById = asyncHandler(async (req, res) => {
    const categorie = await Categorie.findById(req.params.id);
    if (categorie) {
        res.json(categorie);
    } else {
        res.status(404);
        throw new Error("categorie not found");
    }
}

);

// @desc    Delete a categorie
// @route   DELETE /api/categorie/:id

const deletecategorie = asyncHandler(async (req, res) => {
    const categorie = await Categorie.findById(req.params.id);
    if (categorie) {
        await categorie.remove();
        res.json({ message: "categorie removed" });
    } else {
        res.status(404);
        throw new Error("categorie not found");
    }
}
);

// @desc    Create a categorie
// @route   POST /api/categorie

const createcategorie = asyncHandler(async (req, res) => {
    const { nom } = req.body;
    const categorie = new Categorie({
        nom,
    });
    const createdcategorie = await categorie.save();
    res.status(201).json(createdcategorie);
}

);

// @desc    Update a categorie
// @route   PUT /api/categorie/:id

const updatecategorie = asyncHandler(async (req, res) => {
    const { nom } = req.body;
    const categorie = await Categorie.findById(req.params.id);
    if (categorie) {
        categorie.nom = nom;
        const updatedcategorie = await categorie.save();
        res.json(updatedcategorie);
    } else {
        res.status(404);
        throw new Error("categorie not found");
    }
}
);

module.exports = {
    getCategories,
    getcategorieById,
    deletecategorie,
    createcategorie,
    updatecategorie,
};


