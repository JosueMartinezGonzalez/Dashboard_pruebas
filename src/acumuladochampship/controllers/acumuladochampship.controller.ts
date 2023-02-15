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

import { AcumuladochampshipService } from '../services/acumuladochampship.service';
import { CreateAcumuladochampshipDto, UpdateAcumuladochampshipDto } from '../dtos/acumuladochampship.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('Acumuladochampship')
export class AcumuladochampshipController {
  constructor(private AcumuladochampshipService: AcumuladochampshipService) {}

  @Get()
  findAll() {
    return this.AcumuladochampshipService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.AcumuladochampshipService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateAcumuladochampshipDto) {
    return this.AcumuladochampshipService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateAcumuladochampshipDto) {
    return this.AcumuladochampshipService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AcumuladochampshipService.remove(id);
  }
}
