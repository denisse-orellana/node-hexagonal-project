import http from 'http'
import { Application } from 'express'
import { Bootstrap } from './base.bootstrap'
import { AppService } from './services/app.service'

export default class extends Bootstrap {
  constructor(private readonly app: Application) {
    super()
  }

  // SOLID Principle: Liskov Sustitution
  // SOLID Principle: Single Resposibility
  initialize() {
    return new Promise<string | Error>((_resolve, reject) => {
      const server = http.createServer(this.app)

      server
        // .listen(3000)
        .listen(`${AppService.PORT}`)
        .on('listening', () => {
          // resolve('Promise resolve successfully')
          console.log(`Listening server on port: ${AppService.PORT}`)
        })
        .on('error', error => {
          reject(error)
          console.log(`Error on port: ${AppService.PORT}`)
        })
    })
  }
}
