import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Acumuladochampship extends Document {
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
}

export const AcumuladochampshipSchema = SchemaFactory.createForClass(Acumuladochampship);
