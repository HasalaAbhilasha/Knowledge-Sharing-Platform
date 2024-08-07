import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from '../content/content.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  body: string;

  @Column()
  contentId: number;

  @Column()
  userId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => Content, (content) => content.comments)
  content: Content;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
