'use strict';

const app = require('../routes');
const test = require('tape');
const request = require('supertest');

test('/rocket endpoint', (t) => {
  request(app)
    .get('/rocket')
})