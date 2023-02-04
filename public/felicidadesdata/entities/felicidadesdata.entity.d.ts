import { Document } from 'mongoose';
export declare class Felicidadesdata extends Document {
    img: string;
    nombre: string;
    plate: string;
    categoria: string;
    nuevaCategoria: string;
}
export declare const FelicidadesdataSchema: import("mongoose").Schema<Felicidadesdata, import("mongoose").Model<any, any>, undefined>;
