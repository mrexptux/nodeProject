const Proveedor = require("../models/proveedor.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createProveedor = async (req, res, next) => {
  try {
    //const proveedor = await Proveedor.create(req.body);
    const { empresa, sector } = req.body;
    const coverImage = req.file ? req.file.path : "";
    const proveedor = await Proveedor.create({
      empresa,
      sector,
      coverImage
    });
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: proveedor,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProveedores = async (req, res, next) => {
  try {
    const proveedors = await Proveedor.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: proveedors,
    });
  } catch (error) {
    next(error);
  }
};

const getProveedorById = async (req, res, next) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (proveedor) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: proveedor,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateProveedor = async (req, res, next) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (proveedor) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: proveedor,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const addProveedorCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: "No file in the request.",
      });
    }
    const proveedor = await Proveedor.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (proveedor) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: proveedor,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProveedor = async (req, res, next) => {
  try {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if (proveedor) {

      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: proveedor
      });

    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

//Exportarmeos las funciones asincronas creadas anteriormente
module.exports = { createProveedor, getAllProveedores, getProveedorById, updateProveedor, addProveedorCover, deleteProveedor };
