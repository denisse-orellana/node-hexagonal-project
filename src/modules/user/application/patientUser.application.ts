// import PatientUser, { PatientUserUpdate } from '../domain/patientUser'
// // import { PatientUserRepository } from '../domain/patientUser.repository'
// import { PatientUserRepository } from '../domain/patientUser.repository'

// export default class PatientUserApplication {
//   // SOLID Principle: Inversion Dependency
//   // Design Pattern: Injection Dependecy
//   constructor(private readonly patientUserRepository: PatientUserRepository) {}

//   insert(patientUser: PatientUser) {
//     return this.patientUserRepository.insert(patientUser)
//   }

//   list() {
//     return this.patientUserRepository.list()
//   }

//   listOne(guid: string) {
//     return this.patientUserRepository.listOne(guid)
//   }

//   update(guid: string, patientUser: Partial<PatientUserUpdate>) {
//     return this.patientUserRepository.update(guid, patientUser)
//   }

//   delete(guid: string) {
//     return this.patientUserRepository.delete(guid)
//   }
// }


import PatientUser, { PatientUserUpdate } from '../domain/patientUser'
import { PatientUserRepository } from '../domain/patientUser.repository'

export default class PatientUserApplication {

  // Solid Principle: Inversion Dependency
  // Design Pattern Injection Dependency: https://desarrolloweb.com/articulos/patron-diseno-contenedor-dependencias.html
  constructor(private readonly patientUserRepository: PatientUserRepository) {}

  insert(patientUser: PatientUser) {
    return this.patientUserRepository.insert(patientUser)
  }

  list() {
    return this.patientUserRepository.list()
  }

  listOne(guid: string) {
    return this.patientUserRepository.listOne(guid)
  }

  update(guid: string, patientUser: Partial<PatientUserUpdate>) {
    return this.patientUserRepository.update(guid, patientUser)
  }

  delete(guid: string) {
    return this.patientUserRepository.delete(guid)
  }
}