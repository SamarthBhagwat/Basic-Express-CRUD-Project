const express = require('express')
const {PORT} = require('./config/')

const app = express()

app.listen(PORT, () =>{
    console.log(`Server is up and running in port ${PORT}`)
})