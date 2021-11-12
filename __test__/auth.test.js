'use strict';

const { app }=require('../auth/server');
const supertest=require('supertest');
const mockReq=supertest(app);
const {db}=require('../auth/model/index');

beforeAll(async()=>{
  await db.sync;
})

afterAll(async()=>{
  
  await db.drop();
})

  describe('testing server',()=>{

    xit('can sign up, creating new user ', async () => {

      const response = await mockReq.post('/signup').send({
        username: 'Aseel', 
        password: '123'
      });
  
      expect(response.status).toBe(201);
      expect(response.body.username).toEqual('Aseel');      
   
    });



    xit('can sign in ', async () => {

     const response =await mockReq.post('/signin').auth("Aseel","aseel");
      expect(response.status).toEqual(200);
      expect(response.body.username).toEqual("Aseel");
    });
   
   });