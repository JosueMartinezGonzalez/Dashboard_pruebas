import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Telefonos extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  numero: string;
}

export const TelefonosSchema = SchemaFactory.createForClass(Telefonos);
