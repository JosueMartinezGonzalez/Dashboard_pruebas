import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateClientesartecDto {
  @IsString()
  @IsNotEmpty()
  readonly pdf: string;
}

export class UpdateClientesartecDto extends PartialType(CreateClientesartecDto) {}
