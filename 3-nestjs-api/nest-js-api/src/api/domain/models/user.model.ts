import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
