import { IEntity } from '../../shared/entity.interface'
import { PatientUserUpdate } from './interfaces/patientUserUpdate.interface'
import { PatientUserProperties } from './types/patientUser.type'
import { EmailVO } from './value-objects/email.vo'

export default class PatientUser implements IEntity<PatientUserProperties, PatientUserUpdate> {
  private name!: string
  private lastname!: string 
  private readonly email!: EmailVO
  private password!: string
  private cellphone!: string
  private refreshToken!: string
  private active: boolean
  private readonly guid!: string

  constructor(patientUserProperties: PatientUserProperties) {
    this.active = true
    Object.assign(this, patientUserProperties)
  }

  properties(): PatientUserProperties {
    return {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      cellphone: this.cellphone,
      refreshToken: this.refreshToken,
      active: this.active,
      guid: this.guid,
    }
  }

  update(fields: PatientUserUpdate) {
    Object.assign(this, fields)
  }

  delete() {
    this.active = false
  }
}
