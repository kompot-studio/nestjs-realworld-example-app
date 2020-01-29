import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TagService} from './tag.service';
import {TagController} from './tag.controller';
import {TagSchema} from "../schemas/tag.schema";

@Module({
    imports: [TypeOrmModule.forFeature([TagSchema])],
    providers: [TagService],
    controllers: [
        TagController
    ],
    exports: []
})
export class TagModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
    }
}
