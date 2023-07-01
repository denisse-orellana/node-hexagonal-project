import { IsNotEmpty, IsString } from 'class-validator'

export class PatientUserUpdateValidator {
  // Design Pattern: Decorator
  @IsString({ message: 'Guid must be a string' })
  @IsNotEmpty({ message: 'Guid must not be empty' })
  guid: string
}
