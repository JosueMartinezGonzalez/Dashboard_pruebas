import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateFelicidadesdataDto {
  @IsString()
  @IsNotEmpty()
  readonly img: string;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsDate()
  @IsNotEmpty()
  readonly plate: string;

  @IsString()
  @IsNotEmpty()
  readonly texto: string;

  @IsString()
  @IsNotEmpty()
  readonly categoria: string;

  @IsString()
  @IsNotEmpty()
  readonly nuevaCategoria: string;
}

export class UpdateFelicidadesdataDto extends PartialType(CreateFelicidadesdataDto) {}
