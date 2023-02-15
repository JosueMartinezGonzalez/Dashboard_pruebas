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

import { VentasbmxService } from '../services/ventasbmx.service';
import { CreateVentasbmxDto, UpdateVentasbmxDto } from '../dtos/ventasbmx.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('ventasbmx')
export class VentasbmxController {
  constructor(private VentasbmxService: VentasbmxService) {}

  @Get()
  findAll() {
    return this.VentasbmxService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.VentasbmxService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateVentasbmxDto) {
    return this.VentasbmxService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateVentasbmxDto) {
    return this.VentasbmxService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.VentasbmxService.remove(id);
  }
}
