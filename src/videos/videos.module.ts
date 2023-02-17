import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VideoController } from './controllers/videos.controller';
import { VideoService } from './services/videos.service';
import { Video, VideoSchema } from './entities/videos.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Video.name,
        schema: VideoSchema,
      },
    ]),
  ],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideosModule {}
