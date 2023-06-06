const express = require("express");
const router = express.Router();

const { getClients,
    getClientById,
    deleteClient,
    createClient,
    updateClient,
    } = require("../Controllers/clinetController");

router.route("/getClients").get(getClients);
router.route("/getClientById/:id").get(getClientById);
router.route("/deleteClient/:id").delete(deleteClient);
router.route("/createClient").post(createClient);
router.route("/updateClient/:id").put(updateClient);



module.exports = router;