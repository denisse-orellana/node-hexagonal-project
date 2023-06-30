import PatientUser, { PatientUserUpdate } from '../domain/patientUser'
import { PatientUserRepository } from '../domain/patientUser.repository'
import { EmailVO } from '../domain/value-objects/email.vo'
import { PatientUserEntity } from './patientUser.entity'
import DatabaseBootstrap from '../../../bootstrap/database.bootstrap'
import { Result, err, ok } from 'neverthrow'
import { PatientUserEmailInvalidException, PatientUserNotFoundException } from '../domain/exceptions/patientUser.exception'


export default class PatientUserInfraestructure implements PatientUserRepository {
  async insert(patientUser: PatientUser): Promise<PatientUser> {
    const patientUserInsert = new PatientUserEntity()
    const { guid, name, lastname, cellphone, email, password, refreshToken, active } = patientUser.properties()
    
    Object.assign(patientUserInsert, {
      guid,
      name,
      lastname,
      cellphone,
      email: email.value,
      password,
      refreshToken,
      active,
    })

    await DatabaseBootstrap.dataSource.getRepository(PatientUserEntity).save(patientUserInsert)
    return patientUser
  }

  async list(): Promise<PatientUser[]> {
    const repo = DatabaseBootstrap.dataSource.getRepository(PatientUserEntity)
    // added console log: how test it
    console.log(PatientUserEntity)
    const result = await repo.find({ where: { active: true } })
    
    return result.map((el: PatientUserEntity) => {
      const emailResult = EmailVO.create(el.email)
  
      if (emailResult.isErr()) {
        throw new PatientUserEmailInvalidException()
      }
  
      return new PatientUser({
        guid: el.guid,
        name: el.name,
        lastname: el.lastname,
        cellphone: el.cellphone,
        email: emailResult.value,
        password: el.password,
        refreshToken: el.refreshToken,
        active: el.active,
      })
    })
  }

  async listOne(guid: string): Promise<Result<PatientUser, PatientUserNotFoundException | PatientUserEmailInvalidException>> {
    const repo = DatabaseBootstrap.dataSource.getRepository(PatientUserEntity)
    const patientUserFound = await repo.findOne({ where: { guid } })

    if (patientUserFound) {
      const result = patientUserFound
      const emailResult = EmailVO.create(result.email)
  
      if (emailResult.isErr()) {
        return err(new PatientUserEmailInvalidException())
      }

      return ok(
        new PatientUser({
          guid: result.guid,
          name: result.name,
          lastname: result.lastname,
          cellphone: result.cellphone,
          email: emailResult.value,
          password: result.password,
          refreshToken: result.refreshToken,
          active: result.active,
        }),
      )
    } else {
      return err(new PatientUserNotFoundException())
    }
  }

  async update(guid: string, patientUser: Partial<PatientUserUpdate>): Promise<Result<PatientUser, PatientUserNotFoundException>> {
    const repo = DatabaseBootstrap.dataSource.getRepository(PatientUserEntity)
    const patientUserFound = await repo.findOne({ where: { guid }})
  
    if (patientUserFound) {
      Object.assign(patientUserFound, patientUser)
      const result = await repo.save(patientUserFound)
      const emailResult = EmailVO.create(result.email)

      if (emailResult.isErr()) {
        return err(new PatientUserEmailInvalidException())
      }

      return ok(
        new PatientUser({
          guid: result.guid,
          name: result.name,
          lastname: result.lastname,
          cellphone: result.cellphone,
          email: emailResult.value,
          password: result.password,
          refreshToken: result.refreshToken,
          active: result.active,
        }),
      )
    } else {
      return err(new PatientUserNotFoundException())
    }
  }

  async delete(guid: string): Promise<Result<PatientUser, PatientUserNotFoundException | PatientUserEmailInvalidException>> {
    const repo = DatabaseBootstrap.dataSource.getRepository(PatientUserEntity)
    const patientUserFound = await repo.findOne({ where: { guid } })

    if (patientUserFound) {
      patientUserFound.active = false
      const result = await repo.save(patientUserFound)
      const emailResult = EmailVO.create(result.email)

      if (emailResult.isErr()) {
        return err(new PatientUserEmailInvalidException())
      }

      return ok(
        new PatientUser({
          guid: result.guid,
          name: result.name,
          lastname: result.lastname,
          cellphone: result.cellphone,
          email: emailResult.value,
          password: result.password,
          refreshToken: result.refreshToken,
          active: result.active,
        }),
      )
    } else {
      return err(new PatientUserNotFoundException())
    }
  }
}
