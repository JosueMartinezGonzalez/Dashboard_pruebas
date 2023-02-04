import { Model } from 'mongoose';
import { Video } from '../entities/videos.entity';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/videos.dto';
export declare class VideoService {
    private VideoModel;
    constructor(VideoModel: Model<Video>);
    findAll(): Promise<Video[]>;
    findOne(id: string): Promise<Video>;
    create(data: CreateVideoDto): Promise<Video>;
    update(id: string, changes: UpdateVideoDto): Promise<Video>;
    remove(id: string): import("mongoose").Query<Video, Video, {}>;
}
