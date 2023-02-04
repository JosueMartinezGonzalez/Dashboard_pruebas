import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Noticia } from '../entities/noticia.entity';
import { CreateNoticiaDto, UpdateNoticiaDto } from '../dtos/noticia.dto';

@Injectable()
export class NoticiaService {
  constructor(
    @InjectModel(Noticia.name) private NoticiaModel: Model<Noticia>,
  ) {}

  findAll() {
    return this.NoticiaModel.find().exec();
  }

  async findOne(id: string) {
    return this.NoticiaModel.findById(id);
  }

  create(data: CreateNoticiaDto) {
    console.log(data);
    const newModel = new this.NoticiaModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateNoticiaDto) {
    return this.NoticiaModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.NoticiaModel.findByIdAndDelete(id);
  }
}
