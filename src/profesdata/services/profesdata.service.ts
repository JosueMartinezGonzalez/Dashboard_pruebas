import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Profesdata } from '../entities/profesdata.entity';
import { CreateProfesdataDto, UpdateProfesdataDto } from '../dtos/profesdata.dto';

@Injectable()
export class ProfesdataService {
  constructor(
    @InjectModel(Profesdata.name) private ProfesdataModel: Model<Profesdata>,
  ) {}

  findAll() {
    return this.ProfesdataModel.find().exec();
  }

  async findOne(id: string) {
    return this.ProfesdataModel.findById(id);
  }

  create(data: CreateProfesdataDto) {
    console.log(data);
    const newModel = new this.ProfesdataModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateProfesdataDto) {
    return this.ProfesdataModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.ProfesdataModel.findByIdAndDelete(id);
  }
}
