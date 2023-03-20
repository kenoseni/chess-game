import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';

export const config: SequelizeModuleOptions = {
  dialect: 'postgres' as Dialect,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'chess_db',
  autoLoadModels: true,
  synchronize: true,
};
