import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VentasbmxController } from './controllers/ventasbmx.controller';
import { VentasbmxService } from './services/ventasbmx.service';
import { Ventasbmx, VentasbmxSchema } from './entities/ventasbmx.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Ventasbmx.name,
        schema: VentasbmxSchema,
      },
    ]),
  ],
  controllers: [VentasbmxController],
  providers: [VentasbmxService],
})
export class VentasbmxModule {}
