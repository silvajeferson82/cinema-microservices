import { test, expect, beforeAll } from '@jest/globals';
import request from 'supertest';
import * as app from './app';

test('start server', async () => {
  const server = await app.start();
  expect(server).toBeTruthy();
});

test('Health Check', async () => {
  const server = await app.start();
  const response = await request(server).get('/health');
  expect(response.status).toEqual(200);
});

test('stop server', async () => {
  const isStopped = await app.stop();
  expect(isStopped).toBeTruthy();
});