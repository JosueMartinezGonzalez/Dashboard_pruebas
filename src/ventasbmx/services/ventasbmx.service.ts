import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Ventasbmx } from '../entities/ventasbmx.entity';
import {
  CreateVentasbmxDto,
  UpdateVentasbmxDto,
} from '../dtos/ventasbmx.dto';

@Injectable()
export class VentasbmxService {
  constructor(
    @InjectModel(Ventasbmx.name) private VentasbmxModel: Model<Ventasbmx>,
  ) {}

  findAll() {
    return this.VentasbmxModel.find().exec();
  }

  async findOne(id: string) {
    return this.VentasbmxModel.findById(id);
  }

  create(data: CreateVentasbmxDto) {
    console.log(data);
    const newModel = new this.VentasbmxModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateVentasbmxDto) {
    return this.VentasbmxModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.VentasbmxModel.findByIdAndDelete(id);
  }
}
