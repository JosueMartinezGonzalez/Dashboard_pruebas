import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { PdfsService } from '../services/pdfs.service';
import { CreatePdfsDto, UpdatePdfsDto } from '../dtos/pdfs.dto';

@Controller('pdfs')
export class PdfsController {
  constructor(private PdfsService: PdfsService) {}

  @Get()
  findAll() {
    return this.PdfsService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.PdfsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreatePdfsDto) {
    return this.PdfsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdatePdfsDto) {
    return this.PdfsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PdfsService.remove(id);
  }
}
