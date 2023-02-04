import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Felicidadesdata } from '../entities/felicidadesdata.entity';
import { CreateFelicidadesdataDto, UpdateFelicidadesdataDto } from '../dtos/felicidadesdata.dto';

@Injectable()
export class FelicidadesdataService {
  constructor(
    @InjectModel(Felicidadesdata.name) private FelicidadesdataModel: Model<Felicidadesdata>,
  ) {}

  findAll() {
    return this.FelicidadesdataModel.find().exec();
  }

  async findOne(id: string) {
    return this.FelicidadesdataModel.findById(id);
  }

  create(data: CreateFelicidadesdataDto) {
    console.log(data);
    const newModel = new this.FelicidadesdataModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateFelicidadesdataDto) {
    return this.FelicidadesdataModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.FelicidadesdataModel.findByIdAndDelete(id);
  }
}
