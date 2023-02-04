import { Document } from 'mongoose';
export declare class Pdfs extends Document {
    pdf: string;
}
export declare const PdfsSchema: import("mongoose").Schema<Pdfs, import("mongoose").Model<any, any>, undefined>;
