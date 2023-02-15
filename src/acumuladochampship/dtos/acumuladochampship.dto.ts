import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAcumuladochampshipDto {
  @IsNumber()
  @IsNotEmpty()
  readonly rank: number;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly plate: string;

  @IsString()
  @IsNotEmpty()
  readonly categoria: string;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;

  @IsNumber()
  @IsNotEmpty()
  readonly uno: number;

  @IsNumber()
  @IsNotEmpty()
  readonly dos: number;

  @IsNumber()
  @IsNotEmpty()
  readonly tres: number;

  @IsNumber()
  @IsNotEmpty()
  readonly cuatro: number;

  @IsNumber()
  @IsNotEmpty()
  readonly cinco: number;

  @IsNumber()
  @IsNotEmpty()
  readonly seis: number;

  @IsNumber()
  @IsNotEmpty()
  readonly siete: number;

  @IsNumber()
  @IsNotEmpty()
  readonly ocho: number;

  @IsNumber()
  @IsNotEmpty()
  readonly nueve: number;

  @IsNumber()
  @IsNotEmpty()
  readonly diez: number;
}

export class UpdateAcumuladochampshipDto extends PartialType(CreateAcumuladochampshipDto) {}
