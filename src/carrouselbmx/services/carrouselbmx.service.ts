import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Carrouselbmx } from '../entities/carrouselbmx.entity';
import {
  CreateCarrouselbmxDto,
  UpdateCarrouselbmxDto,
} from '../dtos/carrouselbmx.dto';

@Injectable()
export class CarrouselbmxService {
  constructor(
    @InjectModel(Carrouselbmx.name) private CarrouselbmxModel: Model<Carrouselbmx>,
  ) {}

  findAll() {
    return this.CarrouselbmxModel.find().exec();
  }

  async findOne(id: string) {
    return this.CarrouselbmxModel.findById(id);
  }

  create(data: CreateCarrouselbmxDto) {
    console.log(data);
    const newModel = new this.CarrouselbmxModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateCarrouselbmxDto) {
    return this.CarrouselbmxModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.CarrouselbmxModel.findByIdAndDelete(id);
  }
}
