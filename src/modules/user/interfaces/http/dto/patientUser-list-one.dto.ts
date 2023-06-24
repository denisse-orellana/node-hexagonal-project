import { PatientUserProperties } from 'src/modules/user/domain/patientUser'
import { DTO } from './dto.generic'

interface PatientUserOneDTO {
  name: string
  lastname: string
  email: string
  guid: string
}

export type PatientUserListOneDTO = PatientUserOneDTO

export class PatientUserListOneMapping extends DTO<PatientUserProperties, PatientUserListOneDTO> {
  execute(data: PatientUserProperties): PatientUserListOneDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      guid: data.guid,
    }
  }
}