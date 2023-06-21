import PatientUser from './patientUser'

// SOLID Principle: Inversion Dependency
export interface PatientUserRepository {
  // Design Pattern: Facade
  list(): Promise<PatientUser[]>
  listOne(guid: string): Promise<PatientUser>
  insert(user: PatientUser): Promise<PatientUser>
  update(user: PatientUser): Promise<PatientUser>
  delete(guid: string): Promise<PatientUser>
}
