const test = require('tape');
const request = require('supertest');
const express = require('express');
const app = require('../app');

test('Initialize', t => {
  const num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

request(app)
  .get('/profile/3')
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
    console.log(res.body);
  });
