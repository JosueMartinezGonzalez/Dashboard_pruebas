import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Acumuladochallenge extends Document {
  @Prop({ required: true })
  rank: number;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  plate: string;

  @Prop({ required: true })
  categoria: string;

  @Prop()
  total: number;

  @Prop()
  uno: number;

  @Prop()
  dos: number;

  @Prop()
  tres: number;

  @Prop()
  cuatro: number;

  @Prop()
  cinco: number;

  @Prop()
  seis: number;

  @Prop()
  siete: number;

  @Prop()
  ocho: number;

  @Prop()
  nueve: number;

  @Prop()
  diez: number;
}

export const AcumuladochallengeSchema = SchemaFactory.createForClass(Acumuladochallenge);
