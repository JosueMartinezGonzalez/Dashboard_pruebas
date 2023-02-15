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

import { PeriodicoService } from '../services/periodico.service';
import { CreatePeriodicoDto, UpdatePeriodicoDto } from '../dtos/periodico.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('Periodico')
export class PeriodicoController {
  constructor(private PeriodicoService: PeriodicoService) {}

  @Get()
  findAll() {
    return this.PeriodicoService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.PeriodicoService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreatePeriodicoDto) {
    return this.PeriodicoService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdatePeriodicoDto) {
    return this.PeriodicoService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PeriodicoService.remove(id);
  }
}
