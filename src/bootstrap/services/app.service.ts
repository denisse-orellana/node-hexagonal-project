import { DB_CONFIG } from '../interfaces/dbConfig.interface'

export class AppService {
  static get PORT(): number {
    return +process.env.PORT || 3000
  }

  static get DBConfig(): DB_CONFIG {
    return {
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3310,
      // Command in prod: yarn run build | yarn run prod
      entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
      // Command in dev:  yarn run build | yarn run dev
      // entities: [process.env.DB_ENTITIES || 'src/**/*.entity.ts'],
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || '12345',
      database: process.env.DB_DATABASE || 'node_mysqlserver',
      synchronize: process.env.DB_SYNCHRONIZE === 'true' ? true : false,
      logging: process.env.DB_LOGGING === 'true' ? true : false,
    }
  }
}
