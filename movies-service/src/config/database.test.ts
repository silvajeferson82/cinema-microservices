import { test, expect } from '@jest/globals';
import { connect, disconnect } from './database';

test('connects to the database', async () => {
  const connection = await connect();
  expect(connection).toBeTruthy();
});

test('disconnects from the database', async () => {
  const disconnection = await disconnect();
  expect(disconnection).toBeTruthy();
});