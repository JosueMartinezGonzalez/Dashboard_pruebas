import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientesartecController } from './controllers/clientesartec.controller';
import { ClientesartecService } from './services/clientesartec.service';
import { Clientesartec, ClientesartecSchema } from './entities/clientesartec.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Clientesartec.name,
        schema: ClientesartecSchema,
      },
    ]),
  ],
  controllers: [ClientesartecController],
  providers: [ClientesartecService],
})
export class ClientesartecModule {}
