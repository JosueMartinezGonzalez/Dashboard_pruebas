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

import { ProfesdataService } from '../services/profesdata.service';
import { CreateProfesdataDto, UpdateProfesdataDto } from '../dtos/profesdata.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('profesdata')
export class ProfesdataController {
  constructor(private ProfesdataService: ProfesdataService) {}

  @Get()
  findAll() {
    return this.ProfesdataService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.ProfesdataService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProfesdataDto) {
    return this.ProfesdataService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProfesdataDto) {
    return this.ProfesdataService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProfesdataService.remove(id);
  }
}
