'use strict';

const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.server);

describe('=============VALIDATOR TEST=============', () => {
    it('handle server errors', async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
    });

    it('handle search query error', async () => {
        const response = await request.get('/person?name=bashar');
        expect(response.body).toStrictEqual({name: "bashar"});
        expect(response.status).toEqual(200);
    });
})