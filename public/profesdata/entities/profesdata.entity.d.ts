import { Document } from 'mongoose';
export declare class Profesdata extends Document {
    img: string;
    nombre: string;
    titulo: string;
    texto: string;
}
export declare const ProfesdataSchema: import("mongoose").Schema<Profesdata, import("mongoose").Model<any, any>, undefined>;
