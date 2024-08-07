import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from '../content/content.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'ratings' })
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  contentId: number;

  @Column()
  userId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Content, (content) => content.ratings)
  content: Content;

  @ManyToOne(() => User, (user) => user.ratings)
  user: User;
}
