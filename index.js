// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express');
const { connectMongo } = require('./utils/db');


// 2. CONFIGURACIÓN DE LA APLICACIÓN
const PORT = 3000;

const app = express();
app.use(express.json());
connectMongo();




app.post('/', async (req, res) => {

    return res.status(400).send('BIENVENIDOS A LA API DE PAUL, MARIO Y POL =)');

});



//app.use('/bikes', bikeRouter)
//app.use('/habitaciones', habitacionesRoutes)


app.use((request, response, next) => {
    let error = new Error();
    error.status = 404;
    error.message = 'Not Found';
    next(error);
});



app.use((error, request, response, next) => {
    return response.status(error.status || 500).json(error.message || 'Unexpected error');
});


// 5. FUNCIÓN DE INICIO
app.listen(PORT, () => {
    console.log(`app running in port ${PORT}`);
});