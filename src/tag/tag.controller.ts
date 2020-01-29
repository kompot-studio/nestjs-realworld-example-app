import {Controller, Get} from '@nestjs/common';
import {TagService} from './tag.service';

import {ApiBearerAuth, ApiUseTags,} from '@nestjs/swagger';
import {productFields, TagSchema} from "../schemas/tag.schema";

@ApiBearerAuth()
@ApiUseTags('tags')
@Controller('tags')
export class TagController {
    constructor(private readonly tagService: TagService) {
    }

    @Get()
    async findAll(): Promise<TagSchema[]> {
        return await this.tagService.findAll();
    }

    @Get("/create")
    async create(): Promise<TagSchema> {
        const tag = {
          [productFields.name]: "sadasd"
        };
        return await this.tagService.create(tag);
    }
}
