import { test, expect, jest } from '@jest/globals';
import { start, stop } from './app';
import request from 'supertest';

const apiMock = jest.fn((app, repository) => true);

test('start server', async () => {
  const server = await start(apiMock);
  expect(server).toBeTruthy();
});

test('Health Check', async () => {
  process.env.PORT = '3001';
  const server = await start(apiMock);
  const response = await request(server).get('/health');
  expect(response.status).toEqual(200);
});

test('stop server', async () => {
  const isStopped = await stop();
  expect(isStopped).toBeTruthy();
});
