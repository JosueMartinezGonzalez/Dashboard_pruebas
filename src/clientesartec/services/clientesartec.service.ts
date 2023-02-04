import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Clientesartec } from '../entities/clientesartec.entity';
import { CreateClientesartecDto, UpdateClientesartecDto } from '../dtos/clientesartec.dto';

@Injectable()
export class ClientesartecService {
  constructor(
    @InjectModel(Clientesartec.name) private ClientesartecModel: Model<Clientesartec>,
  ) {}

  findAll() {
    return this.ClientesartecModel.find().exec();
  }

  async findOne(id: string) {
    return this.ClientesartecModel.findById(id);
  }

  create(data: CreateClientesartecDto) {
    console.log(data);
    const newModel = new this.ClientesartecModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateClientesartecDto) {
    return this.ClientesartecModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.ClientesartecModel.findByIdAndDelete(id);
  }
}
