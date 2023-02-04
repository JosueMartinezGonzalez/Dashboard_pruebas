import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { FelicidadesdataService } from '../services/felicidadesdata.service';
import { CreateFelicidadesdataDto, UpdateFelicidadesdataDto } from '../dtos/felicidadesdata.dto';

@Controller('Felicidadesdata')
export class FelicidadesdataController {
  constructor(private FelicidadesdataService: FelicidadesdataService) {}

  @Get()
  findAll() {
    return this.FelicidadesdataService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.FelicidadesdataService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateFelicidadesdataDto) {
    return this.FelicidadesdataService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateFelicidadesdataDto) {
    return this.FelicidadesdataService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.FelicidadesdataService.remove(id);
  }
}
