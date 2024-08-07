import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';
import { Comment } from '../comment/comment.entity';
import { Rating } from '../rating/rating.entity';

@Entity({ name: 'contents' })
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  body: string;

  @Column()
  userId: number;

  @Column()
  categoryId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.contents)
  user: User;

  @ManyToOne(() => Category, (category) => category.contents)
  category: Category;

  @OneToMany(() => Comment, (comment) => comment.content)
  comments: Comment[];

  @OneToMany(() => Rating, (rating) => rating.content)
  ratings: Rating[];
}
