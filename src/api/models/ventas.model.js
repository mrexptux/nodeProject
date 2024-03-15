const mongoose = require("mongoose");

// Definición del esquema del Ventas

const ventasSchema = new mongoose.Schema({
  
  idCliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
  },
  date: {
    type: Number,
    required: true,
  }
});

const Ventas = mongoose.model("Ventas", ventasSchema);

module.exports = Ventas;
