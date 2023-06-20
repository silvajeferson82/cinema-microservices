import * as database from '../config/database';
import { ObjectId } from 'mongodb';
import { IMovieDTO } from '../dto/movie.dto';

export const getAllMovies = async (): Promise<IMovieDTO[]> => {
  try {
    const db = await database.connect();
    const movies: IMovieDTO[] = await db.collection('movies').find().toArray();
    return movies;
    
  } catch (error) {
    return error;
  }
}

export const getMovieById = async (id: string): Promise<IMovieDTO> => {
  try {
    const db = await database.connect();
    return await db.collection('movies').findOne({ _id: new ObjectId(id) });
  } catch (error) {
    return error;
  }
}

export const getMoviePremieres = async (): Promise<IMovieDTO[]> => {
  try {
    const db = await database.connect();
  
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
    const movies: IMovieDTO[] = await db.collection('movies').find().toArray();
    const premieres = movies.filter(movie => {
      return new Date(movie.dataLancamento).getTime() >= thirtyDaysAgo.getTime();
    });
    return premieres;
    
  } catch (error) {
    return error;
  }
}