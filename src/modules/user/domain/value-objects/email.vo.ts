import { ValueObject } from './vo.class'

interface EmailProps {
  value: string
}

export class EmailVO extends ValueObject<EmailProps> {
  private constructor(props: EmailProps) {
    super(props)
  }

  static create(email: string) {
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new Error('It\'s no a valid email address')
    }
    return new EmailVO({ value: email })
  }

  get value(): string {
    return this.props.value
  }
}
