/// <reference types="mongoose" />
import { VideoService } from '../services/videos.service';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/videos.dto';
export declare class VideoController {
    private VideoService;
    constructor(VideoService: VideoService);
    findAll(): Promise<import("../entities/videos.entity").Video[]>;
    get(id: string): Promise<import("../entities/videos.entity").Video>;
    create(payload: CreateVideoDto): Promise<import("../entities/videos.entity").Video>;
    update(id: string, payload: UpdateVideoDto): Promise<import("../entities/videos.entity").Video>;
    remove(id: string): import("mongoose").Query<import("../entities/videos.entity").Video, import("../entities/videos.entity").Video, {}>;
}
