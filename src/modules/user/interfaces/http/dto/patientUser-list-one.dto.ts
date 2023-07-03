import { PatientUserProperties } from 'src/modules/user/domain/types/patientUser.type'
import { DTO } from './dto.generic'
import { PatientUserListOneDTO } from './types/patientUserListOne.type'

export class PatientUserListOneMapping extends DTO<PatientUserProperties, PatientUserListOneDTO> {
  execute(data: PatientUserProperties): PatientUserListOneDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      cellphone: data.cellphone,
      guid: data.guid,
    }
  }
}
