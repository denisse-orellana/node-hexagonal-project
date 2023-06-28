import { NextFunction, Response, Request } from 'express'
import PatientUserApplication from '../../application/patientUser.application'
import PatientUserFactory from '../../domain/patientUser-factory'
import { EmailVO } from '../../domain/value-objects/email.vo'
import { PatientUserInsertMapping } from './dto/patientUser-insert.dto'
import { PatientUserListOneMapping } from './dto/patientUser-list-one.dto'
import { PatientUserListMapping } from './dto/patientUser-list.dto'
import { GuidVO } from '../../domain/value-objects/guid.vo'
import { PatientUserUpdateMapping } from './dto/patientUser-update.dto'
import { PatientUserDeleteMapping } from './dto/patientUser-delete.dto'
import { IError } from '../helpers/ierror'


export default class {
  // application: any
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
      const data = await this.application.insert(patientUserResult.value) 
      const result = new PatientUserInsertMapping().execute(data.properties())
      // res.status(201).json(result)
      res.json(result)
    }
  }

  async list(_req: Request, res: Response) {
    const list = await this.application.list()
    const result = new PatientUserListMapping().execute(list.map(patientUser => patientUser.properties()))
    res.json(result)
  }

  async listOne(req: Request, res: Response, next: NextFunction) {
    const { guid } = req.params

    const guidResult = GuidVO.create(guid)
    if (guidResult.isErr()) {
      const err: IError = new Error(guidResult.error.message)
      err.status = 411 
      return next(err)
    }

    const patientUserResult = await this.application.listOne(guid)

    if (patientUserResult.isErr()) {
      return res.status(404).send(patientUserResult.error.message)
    } else if (patientUserResult.isOk()) {
      const result = new PatientUserListOneMapping().execute(patientUserResult.value.properties())
      return res.json(result)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { guid } = req.params
    const fieldsToUpdate = req.body

    const guidResult = GuidVO.create(guid)
    if (guidResult.isErr()) {
      const err: IError = new Error(guidResult.error.message)
      err.status = 411
      return next(err)
    }

    const dataResult = await this.application.update(guid, fieldsToUpdate)
    if (dataResult.isErr()) {
      const err: IError = new Error(dataResult.error.message)
      err.status = 404
      return next(err)
    } else {
      const result = new PatientUserUpdateMapping().execute(dataResult.value.properties())
      return res.json(result)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { guid } = req.params

    const guidResult = GuidVO.create(guid)
    if (guidResult.isErr()) {
      const err: IError = new Error(guidResult.error.message)
      err.status = 411
      return next(err)
    }

    const dataResult = await this.application.dete(guid)
    if (dataResult.isErr()) {
      const err: IError = new Error(dataResult.error.message)
      err.status = 404
      return next(err)
    } else {
      const result = new PatientUserDeleteMapping().execute(dataResult.value.properties())
      res.json(result)
    }
  }
}
