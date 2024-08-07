import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ContentModule } from './modules/content/content.module';
import { CategoryModule } from './modules/category/category.module';
import { CommentModule } from './modules/comment/comment.module';
import { RatingModule } from './modules/rating/rating.module';
import { User } from './modules/user/user.entity';
import { Content } from './modules/content/content.entity';
import { Category } from './modules/category/category.entity';
import { Rating } from './modules/rating/rating.entity';
import { Comment } from './modules/comment/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'knowledge_sharing_platform',
      entities: [User, Content, Category, Comment, Rating],
      synchronize: true,
      dropSchema: true,
    }),
    UserModule,
    ContentModule,
    CategoryModule,
    CommentModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
