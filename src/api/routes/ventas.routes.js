const express = require("express");
const ventasRouter = express.Router();
const { createVenta, getAllVentas, getVentaById, updateVenta, deleteVenta } = require("../controllers/ventas.controller");
const { isAuth } = require('../middlewares/auth.middleware');

ventasRouter.post("/", createVenta);
ventasRouter.get("/", getAllVentas);
ventasRouter.get("/:id", getVentaById);
ventasRouter.patch("/:id", updateVenta);
ventasRouter.delete("/:id", deleteVenta);

module.exports = ventasRouter;
