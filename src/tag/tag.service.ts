import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {MongoRepository} from 'typeorm';
import {productFields, TagSchema} from "../schemas/tag.schema";

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagSchema)
    private readonly tagRepository: MongoRepository<TagSchema>
  ) {}

  async findAll(): Promise<TagSchema[]> {
    return await this.tagRepository.find();
  }

  async create(data): Promise<any> {
    const tag = new TagSchema();
    tag[productFields.name] = data[productFields.name];
    return this.tagRepository.save(tag);
  }

}
