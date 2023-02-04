import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCalendariosDto {
  @IsString()
  @IsNotEmpty()
  readonly pdf: string;
}

export class UpdateCalendariosDto extends PartialType(CreateCalendariosDto) {}
