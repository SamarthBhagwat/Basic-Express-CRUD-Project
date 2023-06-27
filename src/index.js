const express = require('express')
const {PORT} = require('./config/')

const app = express()

app.get('/', (req, res)=>{
    return res.json({
        'success': true,
        'msg': 'Home route',
        'data': {},
        'error': {} 
    })
})

app.listen(PORT, () =>{
    console.log(`Server is up and running in port ${PORT}`)
})