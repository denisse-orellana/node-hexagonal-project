import { PatientUserProperties } from 'src/modules/user/domain/patientUser'
import { DTO } from './dto.generic'

interface PatientUserDTO {
  name: string
  lastname: string
  email: string
  cellphone: string
  guid: string
}

export type PatientUserInsertOneDTO = PatientUserDTO

export class PatientUserInsertMapping extends DTO<PatientUserProperties, PatientUserInsertOneDTO> {
  execute(data: PatientUserProperties): PatientUserInsertOneDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      cellphone: data.cellphone,
      guid: data.guid,
    }
  }
}
