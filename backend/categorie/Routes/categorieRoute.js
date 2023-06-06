const express = require("express");
const router = express.Router();

const { getCategories,
    getcategorieById,
    deletecategorie,
    createcategorie,
    updatecategorie,
    } = require("../Controllers/categorieController");

router.route("/getCategories").get(getCategories);
router.route("/getcategorieById/:id").get(getcategorieById);
router.route("/deletecategorie/:id").delete(deletecategorie);
router.route("/createcategorie").post(createcategorie);
router.route("/updatecategorie/:id").put(updatecategorie);




module.exports = router;