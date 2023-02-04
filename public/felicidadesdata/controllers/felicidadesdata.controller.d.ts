/// <reference types="mongoose" />
import { FelicidadesdataService } from '../services/felicidadesdata.service';
import { CreateFelicidadesdataDto, UpdateFelicidadesdataDto } from '../dtos/felicidadesdata.dto';
export declare class FelicidadesdataController {
    private FelicidadesdataService;
    constructor(FelicidadesdataService: FelicidadesdataService);
    findAll(): Promise<import("../entities/felicidadesdata.entity").Felicidadesdata[]>;
    get(id: string): Promise<import("../entities/felicidadesdata.entity").Felicidadesdata>;
    create(payload: CreateFelicidadesdataDto): Promise<import("../entities/felicidadesdata.entity").Felicidadesdata>;
    update(id: string, payload: UpdateFelicidadesdataDto): Promise<import("../entities/felicidadesdata.entity").Felicidadesdata>;
    remove(id: string): import("mongoose").Query<import("../entities/felicidadesdata.entity").Felicidadesdata, import("../entities/felicidadesdata.entity").Felicidadesdata, {}>;
}
