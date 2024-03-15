const Producto = require("../models/producto.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");
const multer = require('multer')
const upload = multer({ dest: '../public/' })

const createProducto = async (req, res, next) => {
  try {

    const { categoria, precio } = req.body;
    const coverImage = req.file ? req.file.path : "";

    const producto = await Producto.create({
      categoria,
      precio,
      coverImage
    });

    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: productos,
    });
  } catch (error) {
    next(error);
  }
};


const getProductoById = async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: producto,
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

const updateProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (producto) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: producto,
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

const addProductoCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: "No file in the request.",
      });
    }
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (producto) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: producto,
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

const deleteProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (producto) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
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
module.exports = { createProducto, getAllProductos, getProductoById, updateProducto, addProductoCover, deleteProducto };
