import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { CalendariosService } from '../services/calendarios.service';
import { CreateCalendariosDto, UpdateCalendariosDto } from '../dtos/calendarios.dto';

@Controller('Calendarios')
export class CalendariosController {
  constructor(private CalendariosService: CalendariosService) {}

  @Get()
  findAll() {
    return this.CalendariosService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.CalendariosService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCalendariosDto) {
    return this.CalendariosService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCalendariosDto) {
    return this.CalendariosService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CalendariosService.remove(id);
  }
}
