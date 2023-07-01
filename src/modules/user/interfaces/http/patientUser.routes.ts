import { Router } from 'express'
import PatientUserApplication from '../../application/patientUser.application'
import { PatientUserRepository } from '../../domain/patientUser.repository'
import PatientUserInfraestructure from '../../infraestructure/patientUser.infraestructure'
import PatientUserController from './patientUser.controller'
import { MiddlewareListOne } from './midlewares/patientUser.middleware'

const infraestructure: PatientUserRepository = new PatientUserInfraestructure()
const application = new PatientUserApplication(infraestructure)
const controller = new PatientUserController(application)

class PatientUserRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes() {
    // Design Patter: Chain of responsability
    this.expressRouter.post('/insert', controller.insert)
    this.expressRouter.get('/list', controller.list)
    this.expressRouter.get('/list-one/:guid', ...MiddlewareListOne, controller.listOne)
    this.expressRouter.put('/update/:guid', controller.update)
    this.expressRouter.delete('/delete/:guid', controller.delete)
  }
}

export default new PatientUserRouter().expressRouter
