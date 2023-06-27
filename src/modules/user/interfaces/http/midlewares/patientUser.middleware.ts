import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { PatientUserListOneValidator } from '../validators/patientUserListOne.validator'

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
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
  PatientUserMiddleware.ValidateListOne
]