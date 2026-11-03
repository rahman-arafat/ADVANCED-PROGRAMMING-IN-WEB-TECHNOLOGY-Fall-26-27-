import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

import { Product } from '../products/product.entity.js';
import { Employee } from '../employees/employee.entity.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [Product, Employee],

  migrations: ['src/database/migrations/*.ts'],

  synchronize: false,
});