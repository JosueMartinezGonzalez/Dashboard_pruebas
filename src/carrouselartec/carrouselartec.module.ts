import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarrouselartecController } from './controllers/carrouselartec.controller';
import { CarrouselartecService } from './services/carrouselartec.service';
import { Carrouselartec, CarrouselartecSchema } from './entities/carrouselartec.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Carrouselartec.name,
        schema: CarrouselartecSchema,
      },
    ]),
  ],
  controllers: [CarrouselartecController],
  providers: [CarrouselartecService],
})
export class CarrouselartecModule {}
