const express = require('express');
const {PORT} = require('./config/');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api' , apiRoutes);

app.listen(PORT, () =>{
    console.log(`Server is up and running in port ${PORT}`);
})