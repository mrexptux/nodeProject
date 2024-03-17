const express = require("express");
const clienteRouter = express.Router();
const { createCliente, getAllClientes, getClienteById, updateCliente, deleteCliente } = require("../controllers/cliente.controller");
const { isAuth } = require('../middlewares/auth.middleware');
const { upload } = require("../middlewares/file.middleware");

clienteRouter.post("/", [isAuth, upload.single("coverImage")], createCliente);
clienteRouter.get("/", getAllClientes);
clienteRouter.get("/:id", getClienteById);
clienteRouter.patch("/:id", updateCliente);
clienteRouter.delete("/:id", deleteCliente);

module.exports = clienteRouter;
