import { Result } from 'neverthrow'
import PatientUser, { PatientUserUpdate } from './patientUser'
import { PatientUserNotFoundException } from './exceptions/patientUser.exception'

// SOLID Principle: Inversion Dependency
export interface PatientUserRepository {
  // Design Pattern: Facade
  insert(patientUser: PatientUser): Promise<PatientUser>
  list(): Promise<PatientUser[]>
  listOne(guid: string): Promise<Result<PatientUser, PatientUserNotFoundException>>
  update(guid: string, patientUser: Partial<PatientUserUpdate>): Promise<Result<PatientUser, PatientUserNotFoundException>>
  delete(guid: string): Promise<Result<PatientUser, PatientUserNotFoundException>>
}
