import { PatientUserProperties } from 'src/modules/user/domain/patientUser'
import { DTO } from './dto.generic'

interface  PatientUserDTO {
  name: string
  lastname: string
  cellphone: string
  email: string
  guide: string
}

export type PatientUserDeleteDTO = PatientUserDTO

export class PatientUserDeleteMapping extends DTO<PatientUserProperties, PatientUserDeleteDTO> {
  execute(data: PatientUserProperties): PatientUserDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      cellphone: data.cellphone,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
