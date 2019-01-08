'use strict';

const app = require('../routes');
const test = require('tape');
const request = require('supertest');

test('/rocket endpoint', (t) => {
  request(app)
    .get('/rocket')
    .expect(200)
    .end((err, res) => {
      if (err) throw (err);
      const expectedRes = {
        caliber25: 0,
        caliber30: 0,
        caliber50: 0,
        shipstatus: '0%',
        ready: false
      }
      t.same(res.body, expectedRes);
      t.end();
    });
});
