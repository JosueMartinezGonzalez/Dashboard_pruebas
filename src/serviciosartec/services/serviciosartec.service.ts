import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Serviciosartec } from '../entities/serviciosartec.entity';
import { CreateServiciosartecDto, UpdateServiciosartecDto } from '../dtos/serviciosartec.dto';

@Injectable()
export class ServiciosartecService {
  constructor(
    @InjectModel(Serviciosartec.name) private ServiciosartecModel: Model<Serviciosartec>,
  ) {}

  findAll() {
    return this.ServiciosartecModel.find().exec();
  }

  async findOne(id: string) {
    return this.ServiciosartecModel.findById(id);
  }

  create(data: CreateServiciosartecDto) {
    console.log(data);
    const newModel = new this.ServiciosartecModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateServiciosartecDto) {
    return this.ServiciosartecModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.ServiciosartecModel.findByIdAndDelete(id);
  }
}
