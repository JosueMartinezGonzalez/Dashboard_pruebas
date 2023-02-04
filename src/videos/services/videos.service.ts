import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Video } from '../entities/videos.entity';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/videos.dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name) private VideoModel: Model<Video>,
  ) {}

  findAll() {
    return this.VideoModel.find().exec();
  }

  async findOne(id: string) {
    return this.VideoModel.findById(id);
  }

  create(data: CreateVideoDto) {
    console.log(data);
    const newModel = new this.VideoModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateVideoDto) {
    return this.VideoModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.VideoModel.findByIdAndDelete(id);
  }
}
