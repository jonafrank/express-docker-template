import express, { Express } from 'express';
import { AppDataSource } from './datasource';
import bodyParser from 'body-parser';

export async function createServer(): Promise<Express> {
  await AppDataSource.initialize();
  const app: Express = express();
  app.use(bodyParser.json());
  return app;
}
