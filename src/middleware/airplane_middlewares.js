const {StatusCodes} = require('http-status-codes');
const errorResponse = require('../utils/common_utils/error_response');

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(
            "Something went wrong while creating airplane",
            "Model number was not found in the incoming request in the correct form"
        ));
    }

    next();
}

module.exports = {
    validateCreateRequest
}