import ServerBootstrap from './bootstrap/server.bootstrap'
import DatabaseBootstrap from './bootstrap/database.bootstrap'
import { Bootstrap } from './bootstrap/base.bootstrap'
import Application from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)
const databaseBootstrap: Bootstrap = new DatabaseBootstrap()

;(async () => {
  try {
    // const resultServer = await serverBootstrap.initialize()
    // console.log(resultServer)
    // await databaseBootstrap.initialize()
    await databaseBootstrap.initialize(), console.log('Database started successfully')
    await serverBootstrap.initialize()
    console.log('Server started successfully')
  } catch (error) {
    console.log(error)
  }
})()
