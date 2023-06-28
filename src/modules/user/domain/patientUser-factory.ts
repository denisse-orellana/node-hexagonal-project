import { v4 as uuid4 } from 'uuid'
import { PatientUserPasswordService } from './services/user-password.service'
import PatientUser, { PatientUserProperties } from './patientUser'
import { EmailVO } from './value-objects/email.vo'
import { 
  PatientUserNameRequiredException,
  PatientUserLastnameRequiredException,
  PatientUserCellphoneRequiredException, 
  PatientUserPasswordRequiredException,
  PatientUserPasswordLengthInvalidException,
} from './exceptions/patientUser.exception'
import { Result, err, ok } from 'neverthrow'

export type PatientUserResult = Result<
  PatientUser, 
  | PatientUserNameRequiredException
  | PatientUserLastnameRequiredException
  | PatientUserCellphoneRequiredException
  | PatientUserPasswordRequiredException
  | PatientUserPasswordLengthInvalidException
>

// Design Pattern: Abstract Factory
export default class PatientUserFactory {
  async create(name: string, lastname: string, cellphone: string, email: EmailVO, password: string): Promise<PatientUserResult> {
    if (!name || name.trim() === '') {
      return err(new PatientUserNameRequiredException())
    }

    if (!lastname || lastname.trim() === '') {
      return err(new PatientUserLastnameRequiredException())
    }

    if (!cellphone || cellphone.trim() === '') {
      return err(new PatientUserCellphoneRequiredException())
    }

    if (!password || password.trim() === '') {
      return err(new PatientUserPasswordRequiredException())
    }

    if (password.length < 7) {
      return err(new PatientUserPasswordLengthInvalidException(password))
    }
    
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
    return ok(patientUser)
  }
}
