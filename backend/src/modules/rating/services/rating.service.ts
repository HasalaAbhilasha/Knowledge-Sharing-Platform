import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from '../rating.entity';
import { CreateRatingDto} from '../dto/create-rating.dto';
import { UpdateRatingDto } from '../dto/update-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  findAll(): Promise<Rating[]> {
    return this.ratingRepository.find();
  }

  findOne(id: number): Promise<Rating> {
    return this.ratingRepository.findOneBy({ id });
  }

  create(createRatingDto: CreateRatingDto): Promise<Rating> {
    const rating = this.ratingRepository.create(createRatingDto);
    return this.ratingRepository.save(rating);
  }

  async update(id: number, updateRatingDto: UpdateRatingDto): Promise<void> {
    await this.ratingRepository.update(id, updateRatingDto);
  }

  async remove(id: number): Promise<void> {
    await this.ratingRepository.delete(id);
  }
}
