import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Pdfs extends Document {
  @Prop({ required: true })
  pdf: string;
}

export const PdfsSchema = SchemaFactory.createForClass(Pdfs);
