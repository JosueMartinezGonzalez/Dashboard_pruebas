import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AcumuladochallengeController } from './controllers/acumuladochallenge.controller';
import { AcumuladochallengeService } from './services/acumuladochallenge.service';
import { Acumuladochallenge, AcumuladochallengeSchema } from './entities/acumuladochallenge.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Acumuladochallenge.name,
        schema: AcumuladochallengeSchema,
      },
    ]),
  ],
  controllers: [AcumuladochallengeController],
  providers: [AcumuladochallengeService],
})
export class AcumuladochallengeModule {}
