import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

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
export class NoticiasModule {}
