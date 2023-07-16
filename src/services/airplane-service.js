const { StatusCodes } = require('http-status-codes');
const { ValidationError } = require('sequelize');
const {AirplaneRepository} = require('../repositories');
const {AppError} = require('../utils/errors/app_error')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error instanceof ValidationError){
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Failed to create airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;    
    } catch (error) {
        throw new AppError('Failed to get all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;    
    } catch (error) {
        throw error;    
    }
    
}

async function destoryAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return `Airplane with id ${id} successfully deleted`;    
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destoryAirplane
}