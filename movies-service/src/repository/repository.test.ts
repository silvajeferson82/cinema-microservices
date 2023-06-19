import { test, describe, expect, beforeAll, jest } from '@jest/globals';
import * as  repository from './repository';

let testMovieId = '';

beforeAll(async () => {
  const movies = await repository.getAllMovies();
  testMovieId = movies[0]._id;
});
test('should return all movies', async () => {
  const movies = await repository.getAllMovies();
  expect(Array.isArray(movies)).toBeTruthy();
  expect(movies.length).toBeTruthy();
});
  
  test('should return a movie by id', async () => {
    const movie = await repository.getMovieById(testMovieId);
    expect(movie).toBeTruthy();
    expect(movie._id).toEqual(testMovieId);
  });

test('should return movies in the last month', async () => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const movies = await repository.getMoviePremieres();
  expect(Array.isArray(movies)).toBeTruthy();
  expect(movies.length).toBeTruthy();
  expect(new Date(movies[0].dataLancamento).getTime() >= thirtyDaysAgo.getTime() ).toBeTruthy();
});