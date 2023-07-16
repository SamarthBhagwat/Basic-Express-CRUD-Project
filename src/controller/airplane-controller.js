const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common_utils');

/*
*   POST: /airplanes
    req-body : {modelNumber: 'airbus320', capacity: 200}
*/
async function createAirplane(req, res) {
    try {
        const responseData = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity 
        });
        SuccessResponse.data = responseData;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

module.exports = {createAirplane};