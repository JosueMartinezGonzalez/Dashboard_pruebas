import { Document } from 'mongoose';
export declare class Eventos extends Document {
    linkvideo: string;
    titulo: string;
    descipcion: string;
}
export declare const EventosSchema: import("mongoose").Schema<Eventos, import("mongoose").Model<any, any>, undefined>;
