import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PeriodicoController } from './controllers/periodico.controller';
import { PeriodicoService } from './services/periodico.service';
import { Periodico, PeriodicoSchema } from './entities/periodico.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Periodico.name,
        schema: PeriodicoSchema,
      },
    ]),
  ],
  controllers: [PeriodicoController],
  providers: [PeriodicoService],
})
export class PeriodicoModule {}
