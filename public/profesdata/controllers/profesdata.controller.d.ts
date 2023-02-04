/// <reference types="mongoose" />
import { ProfesdataService } from '../services/profesdata.service';
import { CreateProfesdataDto, UpdateProfesdataDto } from '../dtos/profesdata.dto';
export declare class ProfesdataController {
    private ProfesdataService;
    constructor(ProfesdataService: ProfesdataService);
    findAll(): Promise<import("../entities/profesdata.entity").Profesdata[]>;
    get(id: string): Promise<import("../entities/profesdata.entity").Profesdata>;
    create(payload: CreateProfesdataDto): Promise<import("../entities/profesdata.entity").Profesdata>;
    update(id: string, payload: UpdateProfesdataDto): Promise<import("../entities/profesdata.entity").Profesdata>;
    remove(id: string): import("mongoose").Query<import("../entities/profesdata.entity").Profesdata, import("../entities/profesdata.entity").Profesdata, {}>;
}
