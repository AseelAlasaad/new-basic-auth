'use strict';

const {start}=require('./auth/server');

// start();
// make sure our tables are created, start up the HTTP server.
const {db}=require('./auth/model/index');

db.sync().then(()=>{
    start();
}).catch(e => {
    console.error('Could not start server', e.message);
  });