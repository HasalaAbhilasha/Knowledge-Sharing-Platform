import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../comment.entity';
import { CreateCommentDto } from '../dto/create-comment.dto';
import {UpdateCommentDto } from '../dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  findOne(id: number): Promise<Comment> {
    return this.commentRepository.findOneBy({ id });
  }

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }

  async update(id: number, updateCommentDto: UpdateCommentDto): Promise<void> {
    await this.commentRepository.update(id, updateCommentDto);
  }

  async remove(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
