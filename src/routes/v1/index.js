const express = require('express')
const router = express.Router()
const {infoController} = require('../../controller')
const airplanesRoutes = require('./airplane-routes')

console.log("inside v1 routes");
router.use('/airplanes', airplanesRoutes)
router.get('/info' , infoController)

module.exports = router