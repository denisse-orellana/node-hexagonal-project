import { PatientUserProperties } from 'src/modules/user/domain/types/patientUser.type' 
import { DTO } from './dto.generic'
import { PatientUserInsertOneDTO } from './types/patientUseriNSERT.type'


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
