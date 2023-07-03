import { PatientUserProperties } from 'src/modules/user/domain/types/patientUser.type'
import { DTO } from './dto.generic'
import { PatientUserDeleteDTO } from './types/patientUserDelete.type'

export class PatientUserDeleteMapping extends DTO<PatientUserProperties, PatientUserDeleteDTO> {
  execute(data: PatientUserProperties): PatientUserDeleteDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      cellphone: data.cellphone,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
