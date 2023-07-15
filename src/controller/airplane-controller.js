const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { successResponse, errorResponse } = require('../utils/common_utils');

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
        return res.status(StatusCodes.CREATED).json(successResponse('Successfully created airplane', responseData))
    } catch (error) {
        // console.log("Catched error is ", error);
        console.log("Explanation of error is ", error.explanation)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse('Failed to create airplane', error.explanation));
    }
}

module.exports = {createAirplane};