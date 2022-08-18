import dotenv from 'dotenv';

dotenv.config();

import express, { Request, Response } from 'express';
import { AppRouter, ErrorMiddleware } from '@varuntiwari/express-ts-decorators';
import cors from 'cors';
import path from 'path';

const app = express();

import './controllers/templateController';
import './controllers/skillBadgesController';

process.on('uncaughtException', (err: Error) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to uncaught exception`);
  process.exit(1);
});

process.on('unhandledRejection', (err: Error) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});

app.use(cors());

app.use(express.json());

app.use(AppRouter.getInstance());

app.use(ErrorMiddleware);

if (process.env.NODE_ENV === 'production') {
  const __directory = path.resolve();
  app.use(express.static(path.join(__directory, '../client/dist')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__directory, '../client', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req: Request, res) => {
    res.send('API service running 🚀');
  });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`server running at port: ${PORT} 🚀`);
});
