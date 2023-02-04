import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { AcumuladochallengeService } from '../services/acumuladochallenge.service';
import { CreateAcumuladochallengeDto, UpdateAcumuladochallengeDto } from '../dtos/acumuladochallenge.dto';

@Controller('Acumuladochallenge')
export class AcumuladochallengeController {
  constructor(private AcumuladochallengeService: AcumuladochallengeService) {}

  @Get()
  findAll() {
    return this.AcumuladochallengeService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.AcumuladochallengeService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateAcumuladochallengeDto) {
    return this.AcumuladochallengeService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateAcumuladochallengeDto) {
    return this.AcumuladochallengeService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AcumuladochallengeService.remove(id);
  }
}
