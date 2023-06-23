import { PatientUserProperties } from "src/modules/user/domain/patientUser";
import { DTO } from './dto.generic'

interface PatientUserDTO {
  name: string
  lastname: string
  cellphone: string
  email: string
  guid: string
}

export type PatientUserInsertOneDTO = PatientUserDTO

export class PatientUserInsertMapping extends DTO <PatientUserProperties, PatientUserInsertOneDTO> {
  execute(data: PatientUserProperties): PatientUserInsertOneDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      cellphone: data.cellphone,
      email: data.email.value,
      guid: data.guid,
    }
  }
}