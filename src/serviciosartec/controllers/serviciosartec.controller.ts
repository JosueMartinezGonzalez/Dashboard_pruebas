import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { ServiciosartecService } from '../services/serviciosartec.service';
import { CreateServiciosartecDto, UpdateServiciosartecDto } from '../dtos/serviciosartec.dto';

@Controller('serviciosartec')
export class ServiciosartecController {
  constructor(private ServiciosartecService: ServiciosartecService) {}

  @Get()
  findAll() {
    return this.ServiciosartecService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.ServiciosartecService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateServiciosartecDto) {
    return this.ServiciosartecService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateServiciosartecDto) {
    return this.ServiciosartecService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ServiciosartecService.remove(id);
  }
}
