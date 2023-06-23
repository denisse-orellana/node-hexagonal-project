import { Request, Response, NextFunction } from 'express'
import { EmailVO } from '../../domain/value-objects/email.vo'
import { IError } from '../helpers/ierror'
import PatientUserFactory from '../../domain/patientUser-factory'
import PatientUserApplication from '../../application/patientUser.application'

export default class {
  construtor(private application: PatientUserApplication) {
    // pending
  }

  async insert(req: Request, res: Response, next: NextFunction) {
    const { name, lastname, cellphone, email, password } = req.body
  
    const emailResult = EmailVO.create(email)
    if (emailResult.isErr()) {
      const err: IError = new Error(emailResult.error.message)
      err.status = 411
      return next(err)
    }
  
    const patientUserResult = await new PatientUserFactory().create(name, lastname, cellphone, emailResult.value, password)
  
  	if (patientUserResult.isErr()) {
      const err: IError = new Error(patientUserResult.error.message)
      err.status = 411
      return next(err)
    } else {
      const data = await this.application.insert(patientUserResult.value) // pendiente
            // dto previo a retornar los datos
      // respuesta pendiente
    }
  
  }

  async list(req: Request, res: Response) {}

  async listOne(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}
