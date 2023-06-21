import PatientUser from './patientUser'

// SOLID Principle: Inversion Dependency
export interface PatientUserRepository {
  list(): PatientUser[]
  listOne(guid: string): PatientUser
  insert(user: PatientUser): PatientUser
  update(user: PatientUser): PatientUser
  delete(guid: string): PatientUser
}
