const express = require("express");
const productoRouter = express.Router();
const { createProducto, getAllProductos, getProductoById, updateProducto, addProductoCover, deleteProducto, } = require("../controllers/producto.controller");
const { upload, uploadToCloudinary } = require("../middlewares/file.middleware");

const { isAuth } = require("../middlewares/auth.middleware");

// Ruta para crear un nuevo álbum
productoRouter.post("/", createProducto);
productoRouter.get("/", getAllProductos);
productoRouter.get("/:id", getProductoById);
productoRouter.put("/:id", updateProducto);
productoRouter.patch("/:id", updateProducto);
productoRouter.patch("/cover/:id", [upload.single("coverImage"), uploadToCloudinary], addProductoCover);
productoRouter.delete("/:id", deleteProducto);

module.exports = productoRouter;
