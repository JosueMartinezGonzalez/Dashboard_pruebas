import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Carrouselartec } from '../entities/carrouselartec.entity';
import {
  CreateCarrouselartecDto,
  UpdateCarrouselartecDto,
} from '../dtos/carrouselartec.dto';

@Injectable()
export class CarrouselartecService {
  constructor(
    @InjectModel(Carrouselartec.name) private CarrouselartecModel: Model<Carrouselartec>,
  ) {}

  findAll() {
    return this.CarrouselartecModel.find().exec();
  }

  async findOne(id: string) {
    return this.CarrouselartecModel.findById(id);
  }

  create(data: CreateCarrouselartecDto) {
    console.log(data);
    const newModel = new this.CarrouselartecModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateCarrouselartecDto) {
    return this.CarrouselartecModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.CarrouselartecModel.findByIdAndDelete(id);
  }
}
