import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Testimoniosdata } from '../entities/testimoniosdata.entity';
import { CreateTestimoniosdataDto, UpdateTestimoniosdataDto } from '../dtos/testimoniosdata.dto';

@Injectable()
export class TestimoniosdataService {
  constructor(
    @InjectModel(Testimoniosdata.name) private TestimoniosdataModel: Model<Testimoniosdata>,
  ) {}

  findAll() {
    return this.TestimoniosdataModel.find().exec();
  }

  async findOne(id: string) {
    return this.TestimoniosdataModel.findById(id);
  }

  create(data: CreateTestimoniosdataDto) {
    console.log(data);
    const newModel = new this.TestimoniosdataModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateTestimoniosdataDto) {
    return this.TestimoniosdataModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.TestimoniosdataModel.findByIdAndDelete(id);
  }
}
