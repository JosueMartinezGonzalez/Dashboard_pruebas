import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreatePdfsDto {
  @IsString()
  @IsNotEmpty()
  readonly pdf: string;
}

export class UpdatePdfsDto extends PartialType(CreatePdfsDto) {}
