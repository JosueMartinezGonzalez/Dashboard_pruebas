import { Model } from 'mongoose';
import { Serviciosartec } from '../entities/serviciosartec.entity';
import { CreateServiciosartecDto, UpdateServiciosartecDto } from '../dtos/serviciosartec.dto';
export declare class ServiciosartecService {
    private ServiciosartecModel;
    constructor(ServiciosartecModel: Model<Serviciosartec>);
    findAll(): Promise<Serviciosartec[]>;
    findOne(id: string): Promise<Serviciosartec>;
    create(data: CreateServiciosartecDto): Promise<Serviciosartec>;
    update(id: string, changes: UpdateServiciosartecDto): Promise<Serviciosartec>;
    remove(id: string): import("mongoose").Query<Serviciosartec, Serviciosartec, {}>;
}
