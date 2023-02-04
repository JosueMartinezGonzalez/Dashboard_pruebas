import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Acumuladochampship } from '../entities/acumuladochampship.entity';
import { CreateAcumuladochampshipDto, UpdateAcumuladochampshipDto } from '../dtos/acumuladochampship.dto';

@Injectable()
export class AcumuladochampshipService {
  constructor(
    @InjectModel(Acumuladochampship.name) private AcumuladochampshipModel: Model<Acumuladochampship>,
  ) {}

  findAll() {
    return this.AcumuladochampshipModel.find().exec();
  }

  async findOne(id: string) {
    return this.AcumuladochampshipModel.findById(id);
  }

  create(data: CreateAcumuladochampshipDto) {
    console.log(data);
    const newModel = new this.AcumuladochampshipModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateAcumuladochampshipDto) {
    return this.AcumuladochampshipModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.AcumuladochampshipModel.findByIdAndDelete(id);
  }
}
