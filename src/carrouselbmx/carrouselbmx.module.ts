import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarrouselbmxController } from './controllers/carrouselbmx.controller';
import { CarrouselbmxService } from './services/carrouselbmx.service';
import { Carrouselbmx, CarrouselbmxSchema } from './entities/carrouselbmx.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Carrouselbmx.name,
        schema: CarrouselbmxSchema,
      },
    ]),
  ],
  controllers: [CarrouselbmxController],
  providers: [CarrouselbmxService],
})
export class CarrouselbmxsModule {}
