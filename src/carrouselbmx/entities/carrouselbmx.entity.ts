import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Carrouselbmx extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  link: string;
}

export const CarrouselbmxSchema = SchemaFactory.createForClass(Carrouselbmx);
