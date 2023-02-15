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

import { EventosService } from '../services/eventos.service';
import { CreateEventosDto, UpdateEventosDto } from '../dtos/eventos.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('Eventos')
export class EventosController {
  constructor(private EventosService: EventosService) {}

  @Get()
  findAll() {
    return this.EventosService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.EventosService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateEventosDto) {
    return this.EventosService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateEventosDto) {
    return this.EventosService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EventosService.remove(id);
  }
}
