const express = require("express");
const proveedorRouter = express.Router();
const { createProveedor, getAllProveedores, getProveedorById, updateProveedor, deleteProveedor } = require("../controllers/proveedor.controller");
const { isAuth } = require('../middlewares/auth.middleware');

proveedorRouter.post("/", createProveedor);
proveedorRouter.get("/", getAllProveedores);
proveedorRouter.get("/:id", getProveedorById);
proveedorRouter.patch("/:id", updateProveedor);
proveedorRouter.delete("/:id", deleteProveedor);

module.exports = proveedorRouter;
