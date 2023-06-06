const asyncHandler = require("express-async-handler");
const Client = require("../Models/clientsModel");

// @desc    Fetch all client
// @route   GET /api/client


const getClients = asyncHandler(async (req, res) => {
    const client = await Client.find({});
    res.json(client);
}
);

// @desc    Fetch single client
// @route   GET /api/client/:id


const getClientById = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (client) {
        res.json(client);
    } else {
        res.status(404);
        throw new Error("client not found");
    }
}
);

// @desc    Fetch single client
// @route   GET /api/client/:sousDomaine
const getClientBySousDomaine = asyncHandler(async (req, res) => {
    const client = await Client.find({sousDomaine:req.params.sousDomaine});
    if (client) {
        res.json(client);
    } else {
        res.status(404);
        throw new Error("client not found");
    }
}
);


// @desc    Delete a client
// @route   DELETE /api/client/:id


const deleteClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (client) {
        await client.remove();
        res.json({ message: "client removed" });
    } else {
        res.status(404);
        throw new Error("client not found");
    }
}

);

// @desc    Create a client
// @route   POST /api/client

const createClient = asyncHandler(async (req, res) => {
    const { nom, adresse, telephone ,sousDomaine} = req.body;
    const client = new Client({
        nom,
        adresse,
        telephone,
        sousDomaine
    });
    const createdClient = await client.save();
    res.status(201).json(createdClient);
}

);

// @desc    Update a client
// @route   PUT /api/client/:id

const updateClient = asyncHandler(async (req, res) => {
    const { nom, adresse, telephone,sousDomaine } = req.body;
    const client = await Client.findById(req.params.id);
    if (client) {
        client.nom = nom;
        client.adresse = adresse;
        client.telephone = telephone;
        client.sousDomaine = sousDomaine;
        const updatedClient = await client.save();
        res.json(updatedClient);
    } else {
        res.status(404);
        throw new Error("client not found");
    }
}

);

module.exports = {
    getClients,
    getClientById,
    deleteClient,
    createClient,
    updateClient,
};



