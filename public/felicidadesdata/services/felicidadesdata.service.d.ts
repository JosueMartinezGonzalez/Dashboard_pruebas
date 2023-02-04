import { Model } from 'mongoose';
import { Felicidadesdata } from '../entities/felicidadesdata.entity';
import { CreateFelicidadesdataDto, UpdateFelicidadesdataDto } from '../dtos/felicidadesdata.dto';
export declare class FelicidadesdataService {
    private FelicidadesdataModel;
    constructor(FelicidadesdataModel: Model<Felicidadesdata>);
    findAll(): Promise<Felicidadesdata[]>;
    findOne(id: string): Promise<Felicidadesdata>;
    create(data: CreateFelicidadesdataDto): Promise<Felicidadesdata>;
    update(id: string, changes: UpdateFelicidadesdataDto): Promise<Felicidadesdata>;
    remove(id: string): import("mongoose").Query<Felicidadesdata, Felicidadesdata, {}>;
}
