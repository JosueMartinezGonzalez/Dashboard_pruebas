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

import { CarrouselartecService } from '../services/carrouselartec.service';
import { CreateCarrouselartecDto, UpdateCarrouselartecDto } from '../dtos/carrouselartec.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('Carrouselartec')
export class CarrouselartecController {
  constructor(private CarrouselartecService: CarrouselartecService) {}

  @Get()
  findAll() {
    return this.CarrouselartecService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.CarrouselartecService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCarrouselartecDto) {
    return this.CarrouselartecService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCarrouselartecDto) {
    return this.CarrouselartecService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CarrouselartecService.remove(id);
  }
}
