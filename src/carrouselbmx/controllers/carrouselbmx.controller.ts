import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CorsInterceptors } from '../../CorsInterceptor';


import { CarrouselbmxService } from '../services/carrouselbmx.service';
import { CreateCarrouselbmxDto, UpdateCarrouselbmxDto } from '../dtos/carrouselbmx.dto';
import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(new CorsInterceptors({ origin: '*' }))
@UseGuards(AuthGuard('jwt'))
@Controller('carrouselbmx')
export class CarrouselbmxController {
  constructor(private CarrouselbmxService: CarrouselbmxService) {}

  @Get()
  findAll() {
    return this.CarrouselbmxService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.CarrouselbmxService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCarrouselbmxDto) {
    return this.CarrouselbmxService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCarrouselbmxDto) {
    return this.CarrouselbmxService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CarrouselbmxService.remove(id);
  }
}
