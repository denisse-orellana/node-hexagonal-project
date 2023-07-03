import { DomainException } from './domain.exception'
import { DomainExceptionCode } from '../enums/domainException.enum'

export class PatientUserNameRequiredException extends DomainException {
  constructor() { 
   super(PatientUserNameRequiredException.getMessage())
   this.name = DomainExceptionCode.PATIENT_NAME_REQUIRED
  }

  static getMessage() {
    return 'Name is required'
  }
}

export class PatientUserLastnameRequiredException extends DomainException {
  constructor() {
    super(PatientUserLastnameRequiredException.getMessage()) 
    this.name = DomainExceptionCode.PATIENT_LASTNAME_REQUIRED
  }
  
  static getMessage() {
    return 'Lastname is required'
  }
}

export class PatientUserCellphoneRequiredException extends DomainException {
  constructor() { 
   super(PatientUserCellphoneRequiredException.getMessage())
   this.name = DomainExceptionCode.PATIENT_CELLPHONE_REQUIRED
  }

  static getMessage() {
    return 'Cellphone is required'
  }
}

export class PatientUserEmailRequiredException extends DomainException {
  constructor() { 
   super(PatientUserEmailRequiredException.getMessage())
   this.name = DomainExceptionCode.PATIENT_EMAIL_REQUIRED
  }

  static getMessage() {
    return 'Email is required'
  }
}

export class PatientUserEmailInvalidException extends DomainException {
  constructor() { 
   super(PatientUserEmailInvalidException.getMessage())
   this.name = DomainExceptionCode.PATIENT_EMAIL_INVALID
  }

  static getMessage() {
    return 'Email is invalid'
  }
}

export class PatientUserPasswordRequiredException extends DomainException {
  constructor() { 
   super(PatientUserPasswordRequiredException.getMessage())
   this.name = DomainExceptionCode.PATIENT_PASSWORD_REQUIRED
  }

  static getMessage() {
    return 'Password is required'
  }
}

export class PatientUserPasswordLengthInvalidException extends DomainException {
  constructor(password: string) { 
   super(PatientUserPasswordLengthInvalidException.getMessage(password))
   this.name = DomainExceptionCode.PATIENT_PASSWORD_LENGTH_INVALID
  }

  static getMessage(password: string) {
    return `Password must be more than 4 characters, but ${password} has only ${password.length} characters.`
  }
}

export class PatientUserGuidInvalidException extends DomainException {
  constructor() { 
   super(PatientUserGuidInvalidException .getMessage())
   this.name = DomainExceptionCode.PATIENT_GUID_INVALID
  }

  static getMessage() {
    return 'Guid is invalid'
  }
}

export class PatientUserNotFoundException extends DomainException {
  constructor() { 
   super(PatientUserNotFoundException .getMessage())
   this.name = DomainExceptionCode.PATIENT_NOT_FOUND
  }

  static getMessage() {
    return 'Patient not found'
  }
}
