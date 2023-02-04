import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AcumuladochampshipController } from './controllers/acumuladochampship.controller';
import { AcumuladochampshipService } from './services/acumuladochampship.service';
import { Acumuladochampship, AcumuladochampshipSchema } from './entities/acumuladochampship.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Acumuladochampship.name,
        schema: AcumuladochampshipSchema,
      },
    ]),
  ],
  controllers: [AcumuladochampshipController],
  providers: [AcumuladochampshipService],
})
export class AcumuladochampshipModule {}
