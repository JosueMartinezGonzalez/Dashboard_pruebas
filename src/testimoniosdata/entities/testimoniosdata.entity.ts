import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Testimoniosdata extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  texto: string;
}

export const TestimoniosdataSchema = SchemaFactory.createForClass(Testimoniosdata);
