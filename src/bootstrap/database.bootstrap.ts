import { DataSource } from 'typeorm'
import { Bootstrap } from './base.bootstrap'
// import { PatientUserEntity } from '../../src/modules/user/infraestructure/patientUser.entity'
// import { PatientUserEntity } from '../../src/modules/user/infraestructure/patientUser.entity'
import { PatientUserEntity } from '../modules/user/infraestructure/patientUser.entity'

let appDataSource: DataSource

export default class extends Bootstrap {
  initialize(): Promise<DataSource> {
    const AppDataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'user',
      password: '12345',
      database: 'node_mysqlserver',
      synchronize: true,
      logging: true,
      entities: [PatientUserEntity],
      migrations: [],
      subscribers: [],
    })

    appDataSource = AppDataSource

    return AppDataSource.initialize()
  }

  static get dataSource(): DataSource {
    return appDataSource
  }
}
