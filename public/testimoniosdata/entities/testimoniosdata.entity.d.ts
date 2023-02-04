import { Document } from 'mongoose';
export declare class Testimoniosdata extends Document {
    img: string;
    nombre: string;
    titulo: string;
    texto: string;
}
export declare const TestimoniosdataSchema: import("mongoose").Schema<Testimoniosdata, import("mongoose").Model<any, any>, undefined>;
