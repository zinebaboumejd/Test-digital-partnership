const express = require("express");
const router = express.Router();

const { getProduits,
    getProduitById,
    deleteProduit,
    createProduit,
    updateProduit,
    } = require("../Controllers/produitsController");

router.route("/getProduits").get(getProduits);
router.route("/getProduitById/:id").get(getProduitById);
router.route("/deleteProduit/:id").delete(deleteProduit);
router.route("/createProduit").post(createProduit);
router.route("/updateProduit/:id").put(updateProduit);



module.exports = router;