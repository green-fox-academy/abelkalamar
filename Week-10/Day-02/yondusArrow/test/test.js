'use strict';

const app = require('../routes');
const request = require('supertest');
const test = require('tape');

test('/yondu endpoint with queries', (t) => {
  request(app)
    .get('/yondu/?distance=400&time=25')
    .expect(200)
    .end((err, res) => {
      const expectedResponse = {
        distance: 400,
        time: 25,
        speed: 400 / 25
      }
      if(err) throw (err);
      else {
        t.same(res.body, expectedResponse, 'with right queries');
        t.end();
      }
    })
});