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
        console.log("error in services is ", error);
        if(error instanceof ValidationError){
            const appError = new AppError('Failed to create airplane');
            error.errors.forEach((err) =>{
                appError.explanation.push(err.message);
            });
            throw appError;
        }
        throw new AppError('Failed to create airplane');
    }
}

module.exports = {
    createAirplane
}