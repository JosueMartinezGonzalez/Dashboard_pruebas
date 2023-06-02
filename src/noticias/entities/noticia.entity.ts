import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Noticia extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: false })
  fecha: string;

  @Prop()
  descripcion: string;

  @Prop()
  contenido: string;
}

export const NoticiaSchema = SchemaFactory.createForClass(Noticia);
