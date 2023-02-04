import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Calendarios extends Document {
  @Prop({ required: true })
  pdf: string;
}

export const CalendariosSchema = SchemaFactory.createForClass(Calendarios);
