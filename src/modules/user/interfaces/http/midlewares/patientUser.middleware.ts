import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { PatientUserListOneValidator } from '../validators/patientUserListOne.validator'
import { PatientUserUpdateValidator } from '../validators/patientUserUpdate.validator'
import { PatientUserDeleteValidator } from '../validators/patientUserDelete.validator'

class PatientUserMiddleware {
  static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
    const { guid } = req.params
    const patientUserListOneValidator = new PatientUserListOneValidator()
    patientUserListOneValidator.guid = guid
    const errors = await validate(patientUserListOneValidator)

    if (errors.length > 0) {
      console.log(errors)
      return next(new Error('Invalid request'))
    }
    next()
  }

  static async ValidateUpdate(req: Request, _res: Response, next: NextFunction) {
    const { guid } = req.params
    const patientUserUpdateValidator = new PatientUserUpdateValidator()
    patientUserUpdateValidator.guid = guid
    const errors = await validate(patientUserUpdateValidator)

    if (errors.length > 0) {
      console.log(errors)
      return next(new Error('Invalid request'))
    }
    next()
  }

  static async ValidateDelete(req: Request, _res: Response, next: NextFunction) {
    const { guid } = req.params
    const patientUserDeleteValidator = new PatientUserDeleteValidator()
    patientUserDeleteValidator.guid = guid
    const errors = await validate(patientUserDeleteValidator)

    if (errors.length > 0) {
      console.log(errors)
      return next(new Error('Invalid request'))
    }
    next()
  }
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
  PatientUserMiddleware.ValidateListOne
]

export const MiddlewareUpdate: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
  PatientUserMiddleware.ValidateUpdate
]

export const MiddlewareDelete: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
  PatientUserMiddleware.ValidateDelete
]
