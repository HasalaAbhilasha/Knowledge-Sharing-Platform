import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content.entity';
import { CreateContentDto } from '../dto/create-content.dto';
import {UpdateContentDto } from '../dto/update-content.dto';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  findAll(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  findOne(id: number): Promise<Content> {
    return this.contentRepository.findOneBy({ id });
  }

  create(createContentDto: CreateContentDto): Promise<Content> {
    const content = this.contentRepository.create(createContentDto);
    return this.contentRepository.save(content);
  }

  async update(id: number, updateContentDto: UpdateContentDto): Promise<void> {
    await this.contentRepository.update(id, updateContentDto);
  }

  async remove(id: number): Promise<void> {
    await this.contentRepository.delete(id);
  }
}
