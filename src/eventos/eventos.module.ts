import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EventosController } from './controllers/eventos.controller';
import { EventosService } from './services/eventos.service';
import { Eventos, EventosSchema } from './entities/eventos.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Eventos.name,
        schema: EventosSchema,
      },
    ]),
  ],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
