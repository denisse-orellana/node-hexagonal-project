import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class PatientUserEntity {
  @PrimaryColumn()
  guid: string | undefined

  @Column({ type: 'varchar', length: 100 })
  name: string | undefined

  @Column({ type: 'varchar', length: 100 })
  lastname: string | undefined

  @Column({ type: 'varchar', length: 100 })
  cellphone: string | undefined

  @Column({ type: 'varchar', length: 100 })
  email: string | undefined

  @Column({ type: 'varchar', length: 100 })
  password: string | undefined

  @Column({ type: 'varchar', length: 100 })
  refreshToken: string | undefined

  @Column({ type: 'varchar', default: true })
  active: boolean | undefined
}
