import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FelicidadesdataController } from './controllers/felicidadesdata.controller';
import { FelicidadesdataService } from './services/felicidadesdata.service';
import { Felicidadesdata, FelicidadesdataSchema } from './entities/felicidadesdata.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Felicidadesdata.name,
        schema: FelicidadesdataSchema,
      },
    ]),
  ],
  controllers: [FelicidadesdataController],
  providers: [FelicidadesdataService],
})
export class FelicidadesdatasModule {}
