import PatientUser from '../domain/patientUser'
import { PatientUserRepository } from '../domain/patientUser.repository'
import { PatientUserEntity } from './patientUser.entity'
import DatabaseBootstrap from 'src/bootstrap/database.bootstrap'
import { EmailVO } from '../domain/value-objects/email.vo'
export default class PatientUserInfraestructure implements PatientUserRepository {
  async insert(patientUser: PatientUser): Promise<PatientUser> {
    const patientUserInsert = new PatientUserEntity()
    const { guid, name, lastname, cellphone, email, password, refreshToken, active } = patientUser.properties()
    Object.assign(patientUserInsert, {
      guid,
      name,
      lastname,
      cellphone,
      email: email.value,
      password,
      refreshToken,
      active,
    })

    await DatabaseBootstrap.dataSource.getRepository(PatientUserEntity).save(patientUserInsert)
    return patientUser
  }

}