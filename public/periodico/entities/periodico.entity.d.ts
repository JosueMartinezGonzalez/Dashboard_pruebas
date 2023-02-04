import { Document } from 'mongoose';
export declare class Periodico extends Document {
    pdf: string;
}
export declare const PeriodicoSchema: import("mongoose").Schema<Periodico, import("mongoose").Model<any, any>, undefined>;
