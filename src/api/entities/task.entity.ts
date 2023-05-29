import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: number;

  @ManyToOne(() => User, (user: User) => user.tasks)
  public user: User;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;
}
