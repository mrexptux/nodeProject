const express = require("express");
const clienteRouter = express.Router();
const { createCliente, getAllClientes, getClienteById, updateCliente, deleteCliente } = require("../controllers/cliente.controller");
const { isAuth } = require('../middlewares/auth.middleware');


clienteRouter.post("/", createCliente);
clienteRouter.get("/", getAllClientes);
clienteRouter.get("/:id", getClienteById);
clienteRouter.patch("/:id", updateCliente);
clienteRouter.delete("/:id", deleteCliente);

module.exports = clienteRouter;
