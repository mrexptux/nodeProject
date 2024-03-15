const Venta = require("../models/ventas.model");

const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");
//const { isAdmin } = require("../controllers/user.controller");

const createVenta = async (req, res, next) => {
  if (isAdmin()) {
    try {
      const venta = await Venta.create(req.body);
      res.status(201).json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        data: venta,
      });
    } catch (error) {
      next(error);
    }
  }
};

const getAllVentas = async (req, res, next) => {
  try {
    const ventas = await Venta.find().populate("venta");
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: ventas,
    });
  } catch (error) {
    next(error);
  }
};

const getVentaById = async (req, res, next) => {
  try {
    const venta = await Venta.findById(req.params.id).populate("venta");
    if (venta) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: venta,
      });
    } else {
      res.status(404).json({ status: 404, message: "Venta not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateVenta = async (req, res, next) => {
  try {
    const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (venta) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: venta,
      });
    } else {
      res.status(404).json({ status: 404, message: "Venta not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteVenta = async (req, res, next) => {
  const admin = isAdmin(req, res, next);
  try {
    const venta = await Venta.findByIdAndDelete(req.params.id);
    if (venta) {
      res.status(204).json({ status: 204, message: "Venta deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Venta not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createVenta, getAllVentas, getVentaById, updateVenta, deleteVenta };
