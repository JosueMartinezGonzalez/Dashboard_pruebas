import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfesdataController } from './controllers/profesdata.controller';
import { ProfesdataService } from './services/profesdata.service';
import { Profesdata, ProfesdataSchema } from './entities/profesdata.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Profesdata.name,
        schema: ProfesdataSchema,
      },
    ]),
  ],
  controllers: [ProfesdataController],
  providers: [ProfesdataService],
})
export class ProfesdatasModule {}
