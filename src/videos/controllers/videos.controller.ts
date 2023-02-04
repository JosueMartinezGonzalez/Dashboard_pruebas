import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { VideoService } from '../services/videos.service';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/videos.dto';

@Controller('video')
export class VideoController {
  constructor(private VideoService: VideoService) {}

  @Get()
  findAll() {
    return this.VideoService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.VideoService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateVideoDto) {
    return this.VideoService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateVideoDto) {
    return this.VideoService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.VideoService.remove(id);
  }
}
