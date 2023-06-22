import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class PatientUserEntity {
  @PrimaryColumn()
  guid: string

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column({ type: 'varchar', length: 100 })
  lastname: string

  @Column({ type: 'varchar', length: 100 })
  cellphone: string

  @Column({ type: 'varchar', length: 100 })
  email: string

  @Column({ type: 'varchar', length: 100 })
  password: string

  @Column({ type: 'varchar', length: 100 })
  refreshToken: string

  @Column({ type: 'varchar', default: true })
  active: boolean
}
