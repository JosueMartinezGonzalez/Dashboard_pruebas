import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  readonly link: string;
}

export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
