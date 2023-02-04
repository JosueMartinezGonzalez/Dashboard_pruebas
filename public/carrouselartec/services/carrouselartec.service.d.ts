import { Model } from 'mongoose';
import { Carrouselartec } from '../entities/carrouselartec.entity';
import { CreateCarrouselartecDto, UpdateCarrouselartecDto } from '../dtos/carrouselartec.dto';
export declare class CarrouselartecService {
    private CarrouselartecModel;
    constructor(CarrouselartecModel: Model<Carrouselartec>);
    findAll(): Promise<Carrouselartec[]>;
    findOne(id: string): Promise<Carrouselartec>;
    create(data: CreateCarrouselartecDto): Promise<Carrouselartec>;
    update(id: string, changes: UpdateCarrouselartecDto): Promise<Carrouselartec>;
    remove(id: string): import("mongoose").Query<Carrouselartec, Carrouselartec, {}>;
}
