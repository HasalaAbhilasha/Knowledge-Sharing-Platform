import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContentService } from '../services/content.service';
import { CreateContentDto } from '../dto/create-content.dto';
import {UpdateContentDto } from '../dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contentService.findOne(id);
  }

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contentService.remove(id);
  }
}
