import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Periodico extends Document {
  @Prop({ required: true })
  pdf: string;
}

export const PeriodicoSchema = SchemaFactory.createForClass(Periodico);
