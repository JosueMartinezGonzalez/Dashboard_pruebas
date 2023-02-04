import { Document } from 'mongoose';
export declare class Carrouselbmx extends Document {
    img: string;
    titulo: string;
    link: string;
}
export declare const CarrouselbmxSchema: import("mongoose").Schema<Carrouselbmx, import("mongoose").Model<any, any>, undefined>;
