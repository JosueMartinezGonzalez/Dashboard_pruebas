import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAcumuladochampshipDto {
  @IsString()
  @IsNotEmpty()
  readonly rank: number;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsDate()
  @IsNotEmpty()
  readonly plate: string;

  @IsString()
  @IsNotEmpty()
  readonly categoria: string;

  @IsString()
  @IsNotEmpty()
  readonly total: number;
}

export class UpdateAcumuladochampshipDto extends PartialType(CreateAcumuladochampshipDto) {}
