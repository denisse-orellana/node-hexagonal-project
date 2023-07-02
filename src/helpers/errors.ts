// import { Request, Response } from 'express'

// export default class {
//   static notFound(_req: Request, res: Response): void {
//     res.status(404).send('Route Not found')
//   }
// }

import { Request, Response } from 'express'
import { IError } from 'src/modules/user/interfaces/helpers/ierror'

export default class {
  static notFound(_req: Request, res: Response): void {
    res.status(404).send('Route Not found')
  }

  static genericError(error: IError, req: Request, res: Response): void {
    res.status(error.status || 500)
  }
}