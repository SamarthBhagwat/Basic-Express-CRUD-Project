const express = require('express')
const {PORT, logger} = require('./config/')
const apiRoutes = require('./routes')

const app = express()

app.use('/api' , apiRoutes)

app.listen(PORT, () =>{
    console.log(`Server is up and running in port ${PORT}`);
    logger.info("Successfully started the server")
})