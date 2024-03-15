// 1.IMPORTS
// 1.1 librerias npm

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
// 1.2 documentos del proyecto
const { connectMongo } = require("./src/data/mongo");



//const { configCloudinary } = require("./src/utils/cloudinary/config");
// 1.3 las rutas:
const userRouter = require("./src/api/routes/user.routes");
const clienteRouter = require("./src/api/routes/cliente.routes");
const productoRouter = require("./src/api/routes/producto.routes");
const proveedorRouter = require("./src/api/routes/proveedor.routes");
const ventasRouter = require("./src/api/routes/ventas.routes");
const { notFoundHandler, errorHandler } = require("./src/api/middlewares/error.middleware");

// 2. CONFIG
// 2.1 configuración de la app
require("dotenv").config(); // desde aquí se cargan las var de entorno del .env, hasta aquí no existen
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.urlencoded({ extended: true })); // usar urlencode para las urls.
app.use(express.json());

connectMongo();



//configCloudinary();
// 2.2 cabeceras (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// 2.3 cors (https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
app.use(cors()); // no hay restricciones
/*
 * La linea inferior sería un ejemplo de uso de cors, en el que solo
 * permitimos peticiones de esas dos direcciones IP
 * Este concepto se conoce como whitelisting
 */
/* app.use(cors({
  origin: [
    '0.0.0.0',
    'http://localhost:4200'
  ],
  credentials: true,
})); */



app.use(logger("dev"));

// 3. ENDPOINTS

// 3.1 endpoint para test básico
app.get("/", (req, res) => {
  res.send("Server is up");
});



// 3.2 las rutas de mis datos
app.use("/user", userRouter);
app.use("/producto", productoRouter);
app.use("/cliente", clienteRouter);
app.use("/proveedor", proveedorRouter);
app.use("/ventas", ventasRouter);

// 4. MANEJO DE ERRORES -> instanciamos las funciones de error.middleware
app.use(notFoundHandler);
app.use(errorHandler);

// 5. "ARRANCAR" EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
