import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Carrouselartec extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  link: string;
}

export const CarrouselartecSchema = SchemaFactory.createForClass(Carrouselartec);
