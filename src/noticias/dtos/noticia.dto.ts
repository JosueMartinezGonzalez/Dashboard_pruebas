import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateNoticiaDto {
  @IsString()
  readonly img: string;

  @IsString()
  readonly titulo: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly descripcion: string;

  @IsString()
  readonly contenido: string;
}

export class UpdateNoticiaDto extends PartialType(CreateNoticiaDto) {}
