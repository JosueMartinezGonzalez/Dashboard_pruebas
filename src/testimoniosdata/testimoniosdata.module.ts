import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TestimoniosdataController } from './controllers/testimoniosdata.controller';
import { TestimoniosdataService } from './services/testimoniosdata.service';
import { Testimoniosdata, TestimoniosdataSchema } from './entities/testimoniosdata.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Testimoniosdata.name,
        schema: TestimoniosdataSchema,
      },
    ]),
  ],
  controllers: [TestimoniosdataController],
  providers: [TestimoniosdataService],
})
export class TestimoniosdatasModule {}
