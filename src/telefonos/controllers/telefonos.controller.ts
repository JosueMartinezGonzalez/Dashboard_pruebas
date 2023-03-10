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

import { TelefonosService } from '../services/telefonos.service';
import { CreateTelefonosDto, UpdateTelefonosDto } from '../dtos/telefonos.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('telefonos')
export class TelefonosController {
  constructor(private TelefonosService: TelefonosService) {}

  @Get()
  findAll() {
    return this.TelefonosService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.TelefonosService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateTelefonosDto) {
    return this.TelefonosService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateTelefonosDto) {
    return this.TelefonosService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TelefonosService.remove(id);
  }
}
