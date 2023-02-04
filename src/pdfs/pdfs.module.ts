import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PdfsController } from './controllers/pdfs.controller';
import { PdfsService } from './services/pdfs.service';
import { Pdfs, PdfsSchema } from './entities/pdfs.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pdfs.name,
        schema: PdfsSchema,
      },
    ]),
  ],
  controllers: [PdfsController],
  providers: [PdfsService],
})
export class PdfssModule {}
