const express = require('express');
const { AirplaneController } = require('../../controller');
const { AirplaneMiddlewares } = require('../../middleware')
const router = express.Router();

/* POST : /api/v1/airplanes/    --> To create a new airplane
 *   
 * Request body :-
 *      { 
 *          "modelNumber": "Airbus A320",
 *          "capacity": 500
 *      }
 */
router.post('/', 
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);

router.get('/', 
            AirplaneController.getAirplanes);

module.exports = router; 