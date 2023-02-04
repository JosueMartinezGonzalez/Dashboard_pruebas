import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Eventos } from '../entities/eventos.entity';
import { CreateEventosDto, UpdateEventosDto } from '../dtos/eventos.dto';

@Injectable()
export class EventosService {
  constructor(
    @InjectModel(Eventos.name) private EventosModel: Model<Eventos>,
  ) {}

  findAll() {
    return this.EventosModel.find().exec();
  }

  async findOne(id: string) {
    return this.EventosModel.findById(id);
  }

  create(data: CreateEventosDto) {
    console.log(data);
    const newModel = new this.EventosModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateEventosDto) {
    return this.EventosModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.EventosModel.findByIdAndDelete(id);
  }
}
