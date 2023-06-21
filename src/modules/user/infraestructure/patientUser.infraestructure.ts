import PatientUser from '../domain/patientUser'
import { PatientUserRepository } from '../domain/patientUser.repository'

export default class PatientUserInfraestructure implements PatientUserRepository {
  list(): Promise<PatientUser[]> {
    throw new Error('Method not implemented.')
  }
  listOne(guid: string): Promise<PatientUser> {
    throw new Error('Method not implemented.')
  }
  insert(user: PatientUser): Promise<PatientUser> {
    throw new Error('Method not implemented.')
  }
  update(user: PatientUser): Promise<PatientUser> {
    throw new Error('Method not implemented.')
  }
  delete(guid: string): Promise<PatientUser> {
    throw new Error('Method not implemented.')
  }
}