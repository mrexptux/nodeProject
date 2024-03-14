
//para poder conectar tendremos que añadir la libreria de MONGOOSE
const mongoose = require('mongoose');

//const pass = 'mongodb+srv://polete1234:cRzxQ79t5R2CfVQh@cluster0.xvbymvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const pass = 'mongodb+srv://root:root@cluster0.xvbymvb.mongodb.net/?retryWrites=true&w=majority&appName=habitacion';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', conn.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = { connectMongo };