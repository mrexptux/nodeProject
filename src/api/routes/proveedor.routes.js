const express = require("express");
const proveedorRouter = express.Router();
const { createProveedor, getAllProveedores, getProveedorById, updateProveedor, deleteProveedor } = require("../controllers/proveedor.controller");
const { isAuth } = require('../middlewares/auth.middleware');
const { upload, uploadToCloudinary } = require("../middlewares/file.middleware");


proveedorRouter.post("/", [isAuth, upload.single("coverImage")], createProveedor);
proveedorRouter.get("/", getAllProveedores);
proveedorRouter.get("/:id", getProveedorById);
proveedorRouter.patch("/:id", updateProveedor);
proveedorRouter.delete("/:id", deleteProveedor);

module.exports = proveedorRouter;
