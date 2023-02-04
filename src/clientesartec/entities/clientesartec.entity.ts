import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Clientesartec extends Document {
  @Prop({ required: true })
  pdf: string;
}

export const ClientesartecSchema = SchemaFactory.createForClass(Clientesartec);
