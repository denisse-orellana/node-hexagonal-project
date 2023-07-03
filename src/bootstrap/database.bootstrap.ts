import { DataSource } from 'typeorm'
import { Bootstrap } from './base.bootstrap'
// import { PatientUserEntity } from '../modules/user/infraestructure/patientUser.entity'
import { AppService } from './services/app.service'
import { DB_CONFIG } from './interfaces/dbConfig.interface'

let appDataSource: DataSource

export default class extends Bootstrap {
  initialize(): Promise<DataSource> {
    const dbConfig: DB_CONFIG = AppService.DBConfig

    const AppDataSource = new DataSource({
      type: 'mysql',
      // host: 'localhost',
      // port: 3310,
      // username: 'user',
      // password: '12345',
      // database: 'node_mysqlserver',
      // synchronize: true,
      // logging: true,
      // entities: [PatientUserEntity],
      // migrations: [],
      // subscribers: [],
      ...dbConfig,
    })

    appDataSource = AppDataSource

    return AppDataSource.initialize()
  }

  static get dataSource(): DataSource {
    return appDataSource
  }
}
