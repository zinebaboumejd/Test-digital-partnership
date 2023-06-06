const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const { errorHandler } = require("./middlewares/errorMiddleware"); // custom error handler
const port = process.env.PORT || 9000; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { Router } = require("express");
mongoose.set("strictQuery", false);
app.use(express.static("uploads"));
connectDB(); // connect to db

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
const produitRoute = require("./produits/Routes/produitRoute");
const categorieRoute = require("./categorie/Routes/categorieRoute");
const clientRoute = require("./clients/Routes/clientRoute");

app.use("/api/produit", produitRoute);
app.use("/api/categorie", categorieRoute);
app.use("/api/client", clientRoute);


app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
