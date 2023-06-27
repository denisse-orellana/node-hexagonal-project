import { Router } from 'express'
import PatientUserApplication from '../../application/patientUser.application'
import { PatientUserRepository } from '../../domain/patientUser.repository'
import PatientUserInfraestructure from '../../infraestructure/patientUser.infraestructure'
import patientUserController from './patientUser.controller'

const infraestructure: PatientUserRepository = new PatientUserInfraestructure()
const application = new PatientUserApplication(infraestructure)
const controller = new PatientUserController(application)

class PatientUserRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
  }

  mountRoutes() {
    // cargar rutas 
  }
}

export default new PatientUserRouter().expressRouter
