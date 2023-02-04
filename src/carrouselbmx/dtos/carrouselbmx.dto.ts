import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCarrouselbmxDto {
  @IsString()
  @IsNotEmpty()
  readonly img: string;

  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly link: string;
}

export class UpdateCarrouselbmxDto extends PartialType(CreateCarrouselbmxDto) {}
