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

import { NoticiaService } from '../services/noticia.service';
import { CreateNoticiaDto, UpdateNoticiaDto } from '../dtos/noticia.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('noticia')
export class NoticiaController {
  constructor(private NoticiaService: NoticiaService) {}

  @Get()
  findAll() {
    return this.NoticiaService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.NoticiaService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateNoticiaDto) {
    return this.NoticiaService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateNoticiaDto) {
    return this.NoticiaService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.NoticiaService.remove(id);
  }
}
