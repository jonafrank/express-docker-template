import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { options } from '../config/datasource.options';

export const AppDataSource = new DataSource(options);
