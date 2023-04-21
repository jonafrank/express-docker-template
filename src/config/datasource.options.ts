import { DataSourceOptions } from 'typeorm';

export const options: DataSourceOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true, // Disable for production
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
};
