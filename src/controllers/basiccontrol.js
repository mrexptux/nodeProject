const habitaciones = require('../models/basicModel');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");


const getBasic = async (req, response, next) => {

    try {
        const habitacionesTotales = await habitaciones.find();
        return response.status(200).json(habitacionesTotales)
    } catch (error) {
        return next(error)
    }

}



const createBasic = async (req, res, next) => {
    try {
        const habitacion = new habitaciones({
            color: req.body.color,
            metroscuadrados: req.body.metroscuadrados,
            ventanas: req.body.ventanas,
        });

        const createdHabitacion = await habitacion.save();
        return res.status(201).json(createdHabitacion);

    } catch (error) {
        next(error);
    }


}


const get_basic_id = async (req, res, next) => {


    try {

        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        const habitacionConsultarid = await habitaciones.findById(req.params['id']);

        console.log(habitacionConsultarid);

        if (habitacionConsultarid) {
            res.status(200).json({
                status: 200,
                data: habitacionConsultarid,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "No se a encontrado la habitacion...",
            });
        }


    } catch (error) {
        return next(error);
    }

}


const delete_basic = async (req, res, next) => {


    try {

        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await habitaciones.findByIdAndDelete(req.params['id']);
        return res.status(200).json('Habitacion Eliminada!');
    } catch (error) {
        return next(error);
    }


}





module.exports = { getBasic, createBasic, get_basic_id, delete_basic }