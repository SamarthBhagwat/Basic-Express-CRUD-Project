const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common_utils/');
const { AppError } = require('../utils/errors/app_error');

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber || typeof(req.body.modelNumber) != 'string'){
        const error = new AppError('Something went wrong while creating airplane', StatusCodes.BAD_REQUEST);
        error.explanation = ['Model number not found in the request body in correct format']
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.capacity || typeof(req.body.capacity) != 'number'){
        const error = new AppError('Something went wrong while creating airplane', StatusCodes.BAD_REQUEST);
        error.explanation = ['Capacity not found in the request body in correct format']
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest
}