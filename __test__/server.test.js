'use strict';

const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.server);

describe('==========SERVER TEST==========', () => {
    it('handle invalid routes', async () => {
        const res = await request.get('/foo');
        expect(res.status).toEqual(404);
    });

    it('handle valid routes', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
    });

});