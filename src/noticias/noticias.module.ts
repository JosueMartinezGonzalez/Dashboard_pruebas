import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as bodyParser from 'body-parser';

import { NoticiaController } from './controllers/noticia.controller';
import { NoticiaService } from './services/noticia.service';
import { Noticia, NoticiaSchema } from './entities/noticia.entity';

import { ProductsModule } from './../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Noticia.name,
        schema: NoticiaSchema,
      },
    ]),
  ],
  controllers: [NoticiaController],
  providers: [NoticiaService],
})
export class NoticiasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bodyParser.json({ limit: '5gb' }));
    consumer.apply(bodyParser.urlencoded({ limit: '5gb', extended: true }));
  }
}
