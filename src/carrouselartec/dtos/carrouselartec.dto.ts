import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCarrouselartecDto {
  @IsString()
  @IsNotEmpty()
  readonly img: string;

  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly link: string;
}

export class UpdateCarrouselartecDto extends PartialType(CreateCarrouselartecDto) {}
