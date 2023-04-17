import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private carsRepository: Repository<Car>
  ) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carsRepository.save(createCarDto)
  }

  async findAll() {
    return await this.carsRepository.find()
  }

  async findOne(id: number) {
    return await this.carsRepository.findOneBy({id})
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  async remove(id: number) {
    return await this.carsRepository.delete(id)
  }
}
