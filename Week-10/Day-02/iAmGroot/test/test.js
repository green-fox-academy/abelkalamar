'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('/groot endpoint with query', (t) => {
  request(app)
    .get('/groot/?message=whoAreYou')
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw (err);
      } else {
        let expectedRes = {received: 'whoAreYou', translation: 'I am Groot!'};
        t.same(res.body, expectedRes);
        t.end();
      }
    });
});

test('/groot endpoint without query', (t)=>{
  request(app)
    .get('/groot')
    .expect(202)
    .end((err, res) =>{
      if(err) throw (err);
      else {
        t.same(res.body, {error: 'I am Groot!'});
      }
    })
})