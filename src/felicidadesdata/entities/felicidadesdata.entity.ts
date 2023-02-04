import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Felicidadesdata extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  plate: string;

  @Prop({ required: true })
  categoria: string;

  @Prop()
  nuevaCategoria: string;
}

export const FelicidadesdataSchema = SchemaFactory.createForClass(Felicidadesdata);
