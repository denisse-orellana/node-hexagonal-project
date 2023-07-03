import { DataSource } from 'typeorm'

export abstract class Bootstrap {
  // Design Pattern: Facade
  abstract initialize(): Promise<string | Error | DataSource>
}
