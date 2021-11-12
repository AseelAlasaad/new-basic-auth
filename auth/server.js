'use strict';
const express = require('express');
// Prepare the express app
const app = express();
require('dotenv').config();

const PORT=process.env.PORT||3000;
const userRouter=require('./route');

// Process JSON input and put the data on req.body
app.use(express.json());
// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/home',(req,res)=>{
    res.status(200).send('This is The Home 🥳');
   
   })

//route
app.use(userRouter);

//start method

function start(){
    app.listen(PORT,()=>{
        console.log(`Server started on ${PORT}`);
    });
}

module.exports={
    server:app,
    start:start
}