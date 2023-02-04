import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateServiciosartecDto {
  @IsString()
  @IsNotEmpty()
  readonly img: string;

  @IsString()
  @IsNotEmpty()
  readonly titulo: string;
}

export class UpdateServiciosartecDto extends PartialType(CreateServiciosartecDto) {}
