const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const  useCor= require('./middlewares/cors');
const exampleRoutes = require('./routes/exampleRoute');
const userRoutes = require('./routes/userRoute');


mongoose.connect('url').then(function(){
console.log('DB connected Successfully');
}).catch(function(error){

    console.log('Error Connected'+error);
});


app.use(bodyParser.json());
app.use("api",useCor);
app.use("api/example",exampleRoutes)
app.use("api/user",userRoutes)


module.exports=app;