import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Acumuladochallenge } from '../entities/acumuladochallenge.entity';
import { CreateAcumuladochallengeDto, UpdateAcumuladochallengeDto } from '../dtos/acumuladochallenge.dto';

@Injectable()
export class AcumuladochallengeService {
  constructor(
    @InjectModel(Acumuladochallenge.name) private AcumuladochallengeModel: Model<Acumuladochallenge>,
  ) {}

  findAll() {
    return this.AcumuladochallengeModel.find().exec();
  }

  async findOne(id: string) {
    return this.AcumuladochallengeModel.findById(id);
  }

  create(data: CreateAcumuladochallengeDto) {
    console.log(data);
    const newModel = new this.AcumuladochallengeModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateAcumuladochallengeDto) {
    return this.AcumuladochallengeModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.AcumuladochallengeModel.findByIdAndDelete(id);
  }
}
