import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Calendarios } from '../entities/calendarios.entity';
import { CreateCalendariosDto, UpdateCalendariosDto } from '../dtos/calendarios.dto';

@Injectable()
export class CalendariosService {
  constructor(
    @InjectModel(Calendarios.name) private CalendariosModel: Model<Calendarios>,
  ) {}

  findAll() {
    return this.CalendariosModel.find().exec();
  }

  async findOne(id: string) {
    return this.CalendariosModel.findById(id);
  }

  create(data: CreateCalendariosDto) {
    console.log(data);
    const newModel = new this.CalendariosModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateCalendariosDto) {
    return this.CalendariosModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.CalendariosModel.findByIdAndDelete(id);
  }
}
