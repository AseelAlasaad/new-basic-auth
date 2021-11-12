'use strict';

const bcrypt = require('bcrypt');


const express=require('express');
const userRouter=express.Router();
const {Users}=require('./model/index.js');
const basicAuth=require('./middleware/basic-auth');


userRouter.post('/signup', async (req, res) => {

    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const record = await Users.create(req.body);

      res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
  });



  userRouter.post('/signin',basicAuth,async (req, res) => {

    const userInfo=req.user;
    res.status(200).json(userInfo);
  
  });
  


  module.exports=userRouter;