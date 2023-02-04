import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Pdfs } from '../entities/pdfs.entity';
import { CreatePdfsDto, UpdatePdfsDto } from '../dtos/pdfs.dto';

@Injectable()
export class PdfsService {
  constructor(
    @InjectModel(Pdfs.name) private PdfsModel: Model<Pdfs>,
  ) {}

  findAll() {
    return this.PdfsModel.find().exec();
  }

  async findOne(id: string) {
    return this.PdfsModel.findById(id);
  }

  create(data: CreatePdfsDto) {
    console.log(data);
    const newModel = new this.PdfsModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdatePdfsDto) {
    return this.PdfsModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.PdfsModel.findByIdAndDelete(id);
  }
}
