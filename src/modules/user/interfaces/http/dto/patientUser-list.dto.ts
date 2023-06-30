import { PatientUserProperties } from 'src/modules/user/domain/patientUser'
import { DTO } from './dto.generic'

interface PatientUserDTO {
  name: string
  lastname: string
  cellphone: string
  email: string
  guid: string
}

export type PatientUserListDTO = PatientUserDTO[]

export class PatientUserListMapping extends DTO<PatientUserProperties[], PatientUserListDTO> {
  execute(data: PatientUserProperties[]): PatientUserListDTO {
    return data.map((patientUser: PatientUserProperties) => {
      return {
        name: patientUser.name,
        lastname: patientUser.lastname,
        cellphone: patientUser.cellphone,
        email: patientUser.email.value,
        guid: patientUser.guid,
      }
    })
  }
}
