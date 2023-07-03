import { PatientUserProperties } from 'src/modules/user/domain/types/patientUser.type'
import { DTO } from './dto.generic'
import { PatientUserListDTO } from './types/patientUserList.type'

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
