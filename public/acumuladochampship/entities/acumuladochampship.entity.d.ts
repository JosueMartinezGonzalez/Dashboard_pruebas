import { Document } from 'mongoose';
export declare class Acumuladochampship extends Document {
    rank: number;
    nombre: string;
    plate: string;
    categoria: string;
    total: number;
}
export declare const AcumuladochampshipSchema: import("mongoose").Schema<Acumuladochampship, import("mongoose").Model<any, any>, undefined>;
