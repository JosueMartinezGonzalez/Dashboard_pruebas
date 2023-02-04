import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreatePeriodicoDto {
  @IsString()
  @IsNotEmpty()
  readonly pdf: string;
}

export class UpdatePeriodicoDto extends PartialType(CreatePeriodicoDto) {}
