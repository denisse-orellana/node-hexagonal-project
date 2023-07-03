import { EmailVO } from '../value-objects/email.vo'

// SOLID Principle: Interface Segregation
export interface PatientUserRequired {
  name: string
  lastname: string
  email: EmailVO
  password: string
  cellphone: string
}
