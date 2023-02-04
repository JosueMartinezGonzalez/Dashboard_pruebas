import { Model } from 'mongoose';
import { Periodico } from '../entities/periodico.entity';
import { CreatePeriodicoDto, UpdatePeriodicoDto } from '../dtos/periodico.dto';
export declare class PeriodicoService {
    private PeriodicoModel;
    constructor(PeriodicoModel: Model<Periodico>);
    findAll(): Promise<Periodico[]>;
    findOne(id: string): Promise<Periodico>;
    create(data: CreatePeriodicoDto): Promise<Periodico>;
    update(id: string, changes: UpdatePeriodicoDto): Promise<Periodico>;
    remove(id: string): import("mongoose").Query<Periodico, Periodico, {}>;
}
