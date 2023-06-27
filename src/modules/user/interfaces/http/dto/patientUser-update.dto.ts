import { PatientUserProperties } from 'src/modules/user/domain/patientUser'
import { DTO } from './dto.generic'

interface PatientUserDTO {
  name: string
  lastname: string
  email: string
  cellphone: string
  guid: string
}

export type PatientUserUpdateDTO = PatientUserDTO

export class PatientUserUpdateMapping extends DTO<PatientUserProperties, PatientUserUpdateDTO> {
  execute(data: PatientUserProperties): PatientUserUpdateDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      cellphone: data.cellphone,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
