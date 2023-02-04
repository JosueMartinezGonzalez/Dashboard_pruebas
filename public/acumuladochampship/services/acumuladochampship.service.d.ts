import { Model } from 'mongoose';
import { Acumuladochampship } from '../entities/acumuladochampship.entity';
import { CreateAcumuladochampshipDto, UpdateAcumuladochampshipDto } from '../dtos/acumuladochampship.dto';
export declare class AcumuladochampshipService {
    private AcumuladochampshipModel;
    constructor(AcumuladochampshipModel: Model<Acumuladochampship>);
    findAll(): Promise<Acumuladochampship[]>;
    findOne(id: string): Promise<Acumuladochampship>;
    create(data: CreateAcumuladochampshipDto): Promise<Acumuladochampship>;
    update(id: string, changes: UpdateAcumuladochampshipDto): Promise<Acumuladochampship>;
    remove(id: string): import("mongoose").Query<Acumuladochampship, Acumuladochampship, {}>;
}
