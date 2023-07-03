import { PatientUserOptional } from '../interfaces/patientUserOptional.interface'
import { PatientUserRequired } from '../interfaces/patientUserRequired.interface'

export type PatientUserProperties = Required<PatientUserRequired> & Partial<PatientUserOptional>
