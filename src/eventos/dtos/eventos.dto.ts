import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateEventosDto {
  @IsString()
  @IsNotEmpty()
  readonly linkvideo: string;

  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly descipcion: string;
}

export class UpdateEventosDto extends PartialType(CreateEventosDto) {}
