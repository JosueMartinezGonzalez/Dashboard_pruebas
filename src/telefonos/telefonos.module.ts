import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TelefonosController } from './controllers/telefonos.controller';
import { TelefonosService } from './services/telefonos.service';
import { Telefonos, TelefonosSchema } from './entities/telefonos.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Telefonos.name,
        schema: TelefonosSchema,
      },
    ]),
  ],
  controllers: [TelefonosController],
  providers: [TelefonosService],
})
export class TelefonosModule {}
