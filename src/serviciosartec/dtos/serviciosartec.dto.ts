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

  @IsString()
  readonly servicio1: string;

  @IsString()
  readonly servicio2: string;

  @IsString()
  readonly servicio3: string;

  @IsString()
  readonly servicio4: string;

  @IsString()
  readonly servicio5: string;

  @IsString()
  readonly servicio6: string;

  @IsString()
  readonly servicio7: string;

  @IsString()
  readonly servicio8: string;

  @IsString()
  readonly servicio9: string;

  @IsString()
  readonly servicio10: string;
}

export class UpdateServiciosartecDto extends PartialType(CreateServiciosartecDto) {}
