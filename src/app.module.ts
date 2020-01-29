import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import {join} from "path";

const p =join(__dirname, '/schemas/*.schema.ts');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/nestjs_db',
      entities: [p],
      synchronize: true,
      useNewUrlParser: true,
      keepConnectionAlive: true,
      logging: true,
    }),
    // ArticleModule,
    // UserModule,
    // ProfileModule,
    TagModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
