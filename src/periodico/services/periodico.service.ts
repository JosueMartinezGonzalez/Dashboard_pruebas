import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Periodico } from '../entities/periodico.entity';
import { CreatePeriodicoDto, UpdatePeriodicoDto } from '../dtos/periodico.dto';

@Injectable()
export class PeriodicoService {
  constructor(
    @InjectModel(Periodico.name) private PeriodicoModel: Model<Periodico>,
  ) {}

  findAll() {
    return this.PeriodicoModel.find().exec();
  }

  async findOne(id: string) {
    return this.PeriodicoModel.findById(id);
  }

  create(data: CreatePeriodicoDto) {
    console.log(data);
    const newModel = new this.PeriodicoModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdatePeriodicoDto) {
    return this.PeriodicoModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.PeriodicoModel.findByIdAndDelete(id);
  }
}
