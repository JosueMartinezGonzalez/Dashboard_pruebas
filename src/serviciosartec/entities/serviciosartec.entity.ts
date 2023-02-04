import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Serviciosartec extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  titulo: string;
}

export const ServiciosartecSchema = SchemaFactory.createForClass(Serviciosartec);
