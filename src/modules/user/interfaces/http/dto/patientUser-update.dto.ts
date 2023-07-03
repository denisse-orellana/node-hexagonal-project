import { PatientUserProperties } from 'src/modules/user/domain/types/patientUser.type'
import { DTO } from './dto.generic'
import { PatientUserUpdateDTO } from './types/patientUserUpdate.type'

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
