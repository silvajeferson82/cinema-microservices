import { Request, Response, NextFunction } from 'express';
import { IMovieDTO } from '../dto/movie.dto';

export default (app, repository) => {

  app.get('/movies/premieres', async (req: Request, res: Response, next: NextFunction) => {
    const movies: IMovieDTO[] = await repository.getMoviePremieres();
    if (!movies || !movies.length) res.status(404).send({ error: 'Not found' });
    
    res.send(movies);
  });

  app.get('/movies/:id', async (req: Request, res: Response, next: NextFunction) => {
    const movie: IMovieDTO = await repository.getMovieById(req.params.id);
    if (!movie) res.status(404).send({ error: 'Not found' });

    res.send(movie);
  });

  app.get('/movies', async (req: Request, res: Response, next: NextFunction) => {
    const movies: IMovieDTO[] = await repository.getAllMovies();
    if (!movies || !movies.length) res.status(404).send({ error: 'Not found' });
    
    res.send(movies);
  });
  
  
}