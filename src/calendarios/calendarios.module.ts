import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CalendariosController } from './controllers/calendarios.controller';
import { CalendariosService } from './services/calendarios.service';
import { Calendarios, CalendariosSchema } from './entities/calendarios.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Calendarios.name,
        schema: CalendariosSchema,
      },
    ]),
  ],
  controllers: [CalendariosController],
  providers: [CalendariosService],
})
export class CalendariosModule {}
