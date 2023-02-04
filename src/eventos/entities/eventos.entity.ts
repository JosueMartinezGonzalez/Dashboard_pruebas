import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Eventos extends Document {
  @Prop({ required: true })
  linkvideo: string;

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descipcion: string;
}

export const EventosSchema = SchemaFactory.createForClass(Eventos);
