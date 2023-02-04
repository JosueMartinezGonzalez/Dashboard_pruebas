import { Document } from 'mongoose';
export declare class Video extends Document {
    link: string;
}
export declare const VideoSchema: import("mongoose").Schema<Video, import("mongoose").Model<any, any>, undefined>;
