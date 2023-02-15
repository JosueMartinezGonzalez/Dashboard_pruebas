import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Serviciosartec extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  servicio1: string;

  @Prop()
  servicio2: string;

  @Prop()
  servicio3: string;

  @Prop()
  servicio4: string;

  @Prop()
  servicio5: string;

  @Prop()
  servicio6: string;

  @Prop()
  servicio7: string;

  @Prop()
  servicio8: string;

  @Prop()
  servicio9: string;

  @Prop()
  servicio10: string;
}

export const ServiciosartecSchema = SchemaFactory.createForClass(Serviciosartec);
