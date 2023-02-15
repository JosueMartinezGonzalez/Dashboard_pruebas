import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Clientesartec extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  nombre: string;
}

export const ClientesartecSchema = SchemaFactory.createForClass(Clientesartec);
