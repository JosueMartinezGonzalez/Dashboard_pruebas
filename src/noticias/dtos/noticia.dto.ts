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
  @IsNotEmpty()
  readonly img: string;

  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsString()
  @IsNotEmpty()
  readonly contenido: string;
}

export class UpdateNoticiaDto extends PartialType(CreateNoticiaDto) {}
