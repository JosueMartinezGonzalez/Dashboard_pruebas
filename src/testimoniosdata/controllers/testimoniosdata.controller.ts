import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { TestimoniosdataService } from '../services/testimoniosdata.service';
import { CreateTestimoniosdataDto, UpdateTestimoniosdataDto } from '../dtos/testimoniosdata.dto';

@Controller('testimoniosdata')
export class TestimoniosdataController {
  constructor(private TestimoniosdataService: TestimoniosdataService) {}

  @Get()
  findAll() {
    return this.TestimoniosdataService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.TestimoniosdataService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateTestimoniosdataDto) {
    return this.TestimoniosdataService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateTestimoniosdataDto) {
    return this.TestimoniosdataService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TestimoniosdataService.remove(id);
  }
}
