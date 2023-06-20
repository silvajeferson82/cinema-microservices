import express, { Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

require('dotenv').config();

let server: any = null;


async function start(api?, repository?) {
  const app = express();
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(express.json());

  app.get('/health', (req: Request, res: Response, next: NextFunction) => {
    res.send(`The service ${process.env.MS_NAME} already started at ${process.env.PORT}!`);
  });

  api(app, repository)

  app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    res.sendStatus(500);
  });

  server = app.listen(process.env.PORT, () => { 
    console.log(`The service ${process.env.MS_NAME} already started at ${process.env.PORT}!`);
  });

  return server;
};

async function stop() {
  if (server) await server.close();
  return true
};

export { start, stop };