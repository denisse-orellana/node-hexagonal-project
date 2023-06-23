import { ValueObject } from './vo.class'
import { PatientUserEmailInvalidException } from '../exceptions/patientUser.exception'
import { err, ok, Result } from 'neverthrow'

interface EmailProps {
  value: string
}

export type EmailResult = Result<EmailVO, PatientUserEmailInvalidException>
export class EmailVO extends ValueObject<EmailProps> {
  private constructor(props: EmailProps) {
    super(props)
  }

  static create(email: string): EmailResult {
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      return err(new PatientUserEmailInvalidException())
    }
    return ok(new EmailVO({ value: email }))
  }

  get value(): string {
    return this.props.value
  }
}
