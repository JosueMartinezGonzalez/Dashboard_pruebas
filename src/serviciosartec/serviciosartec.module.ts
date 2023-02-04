import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ServiciosartecController } from './controllers/serviciosartec.controller';
import { ServiciosartecService } from './services/serviciosartec.service';
import { Serviciosartec, ServiciosartecSchema } from './entities/serviciosartec.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Serviciosartec.name,
        schema: ServiciosartecSchema,
      },
    ]),
  ],
  controllers: [ServiciosartecController],
  providers: [ServiciosartecService],
})
export class ServiciosartecModule {}
