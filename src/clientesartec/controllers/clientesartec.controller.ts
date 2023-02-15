import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { ClientesartecService } from '../services/clientesartec.service';
import { CreateClientesartecDto, UpdateClientesartecDto } from '../dtos/clientesartec.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('Clientesartec')
export class ClientesartecController {
  constructor(private ClientesartecService: ClientesartecService) {}

  @Get()
  findAll() {
    return this.ClientesartecService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.ClientesartecService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateClientesartecDto) {
    return this.ClientesartecService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateClientesartecDto) {
    return this.ClientesartecService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ClientesartecService.remove(id);
  }
}
