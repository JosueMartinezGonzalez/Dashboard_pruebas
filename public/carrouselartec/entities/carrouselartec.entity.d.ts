import { Document } from 'mongoose';
export declare class Carrouselartec extends Document {
    img: string;
    titulo: string;
    link: string;
}
export declare const CarrouselartecSchema: import("mongoose").Schema<Carrouselartec, import("mongoose").Model<any, any>, undefined>;
