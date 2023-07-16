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


/* 
 *   GET : /api/v1/airplanes/    --> To get all airplanes   
 */            
router.get('/', 
            AirplaneController.getAirplanes);


/* 
 *   GET : /api/v1/airplanes/<id>    --> To get airplane by id  
 */            
router.get('/:id',
            AirplaneController.getAirplane);


router.delete('/:id',
            AirplaneController.destoryAirplane);


module.exports = router; 