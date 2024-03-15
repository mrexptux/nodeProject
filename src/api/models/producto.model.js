const mongoose = require("mongoose");

// Definición del esquema del Producto
const productoSchema = new mongoose.Schema({
  
  categoria: {
    type: String,
    required: false,
  },
  precio: {
    type: Number,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proveedor",
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
