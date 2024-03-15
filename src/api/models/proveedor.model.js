const mongoose = require("mongoose");

const proveedorSchema = new mongoose.Schema({
 
  empresa: {
    type: String,
    required: false,
  },
  sector: {
    type: String,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  }
});

const Proveedor = mongoose.model("Proveedor", proveedorSchema);

module.exports = Proveedor;
