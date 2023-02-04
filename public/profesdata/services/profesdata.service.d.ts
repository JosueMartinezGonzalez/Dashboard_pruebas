import { Model } from 'mongoose';
import { Profesdata } from '../entities/profesdata.entity';
import { CreateProfesdataDto, UpdateProfesdataDto } from '../dtos/profesdata.dto';
export declare class ProfesdataService {
    private ProfesdataModel;
    constructor(ProfesdataModel: Model<Profesdata>);
    findAll(): Promise<Profesdata[]>;
    findOne(id: string): Promise<Profesdata>;
    create(data: CreateProfesdataDto): Promise<Profesdata>;
    update(id: string, changes: UpdateProfesdataDto): Promise<Profesdata>;
    remove(id: string): import("mongoose").Query<Profesdata, Profesdata, {}>;
}
