import { v4 as uuid4 } from 'uuid'
import PatientUser, { PatientUserProperties } from './patientUser'
import { PatientUserPasswordService } from './services/user-password.service'
import { EmailVO } from './value-objects/email.vo'

// Design Pattern: Abstract Factory
export default class PatientUserFactory {
  async create(name: string, lastname: string, email: EmailVO, password: string, cellphone: string) {
    const passwordHash = await PatientUserPasswordService.hash(password)

    const patientUserProperties: PatientUserProperties = {
      name,
      lastname,
      email,
      cellphone,
      password: passwordHash,
      guid: uuid4(),
      refreshToken: uuid4(),
    }

    const patientUser = new PatientUser(patientUserProperties)
    return patientUser
  }
}
