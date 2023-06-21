import bcrypt from 'bcryptjs'

export class PatientUserPasswordService {
  static hash(password: string): Promise<string> {
    return bcrypt.hash(password, 8)
  }
}
