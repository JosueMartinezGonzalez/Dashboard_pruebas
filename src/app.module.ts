import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { NoticiasModule } from './noticias/noticias.module';
import { CarrouselbmxsModule } from './carrouselbmx/carrouselbmx.module';
import { VideosModule } from './videos/videos.module';
import { ProfesdatasModule } from './profesdata/profesdata.module';
import { TestimoniosdatasModule } from './testimoniosdata/testimoniosdata.module';
import { PdfssModule } from './pdfs/pdfs.module';
import { EventosModule } from './eventos/eventos.module';
import { PeriodicoModule } from './periodico/periodico.module';
import { CalendariosModule } from './calendarios/calendarios.module';
import { CarrouselartecModule } from './carrouselartec/carrouselartec.module';
import { ClientesartecModule } from './clientesartec/clientesartec.module';
import { ServiciosartecModule } from './serviciosartec/serviciosartec.module';
import { AcumuladochampshipModule } from './acumuladochampship/acumuladochampship.module';
import { AcumuladochallengeModule } from './acumuladochallenge/acumuladochallenge.module';

import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    HttpModule,
    UsersModule,
    NoticiasModule,
    CarrouselbmxsModule,
    VideosModule,
    ProfesdatasModule,
    TestimoniosdatasModule,
    PdfssModule,
    EventosModule,
    PeriodicoModule,
    CalendariosModule,
    CarrouselartecModule,
    ClientesartecModule,
    ServiciosartecModule,
    AcumuladochampshipModule,
    AcumuladochallengeModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
