import { Document } from 'mongoose';
export declare class Noticia extends Document {
    img: string;
    titulo: string;
    fecha: string;
    descripcion: string;
    contenido: string;
}
export declare const NoticiaSchema: import("mongoose").Schema<Noticia, import("mongoose").Model<any, any>, undefined>;
