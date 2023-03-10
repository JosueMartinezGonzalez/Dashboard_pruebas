import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Telefonos } from '../entities/telefonos.entity';
import { CreateTelefonosDto, UpdateTelefonosDto } from '../dtos/telefonos.dto';

@Injectable()
export class TelefonosService {
  constructor(
    @InjectModel(Telefonos.name) private TelefonosModel: Model<Telefonos>,
  ) {}

  findAll() {
    return this.TelefonosModel.find().exec();
  }

  async findOne(id: string) {
    return this.TelefonosModel.findById(id);
  }

  create(data: CreateTelefonosDto) {
    console.log(data);
    const newModel = new this.TelefonosModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateTelefonosDto) {
    return this.TelefonosModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.TelefonosModel.findByIdAndDelete(id);
  }
}
