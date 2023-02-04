import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Video extends Document {
  @Prop({ required: true })
  link: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
