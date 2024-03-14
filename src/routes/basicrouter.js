const express = require('express');
const basicRouter = express.Router();


const { getBasic, createBasic, get_basic_id, delete_basic } = require('../controllers/basiccontrol');

//LOCALHOST:3000/habitaciones/valor de id 
basicRouter.get('/', getBasic);
basicRouter.post('/', createBasic)
basicRouter.get('/:id', get_basic_id);
basicRouter.get('/delete/:id', delete_basic);



module.exports = { basicRouter }