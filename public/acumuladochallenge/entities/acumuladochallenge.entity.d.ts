import { Document } from 'mongoose';
export declare class Acumuladochallenge extends Document {
    rank: number;
    nombre: string;
    plate: string;
    categoria: string;
    total: number;
}
export declare const AcumuladochallengeSchema: import("mongoose").Schema<Acumuladochallenge, import("mongoose").Model<any, any>, undefined>;
