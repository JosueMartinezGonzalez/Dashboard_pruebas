import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateNoticiaDto {
  @IsString()
  readonly img: string;

  @IsString()
  readonly titulo: string;

  @IsDate()
  readonly date: Date;

  @IsString()
  readonly descripcion: string;

  @IsString()
  readonly contenido: string;
}

export class UpdateNoticiaDto extends PartialType(CreateNoticiaDto) {}
