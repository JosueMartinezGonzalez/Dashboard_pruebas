/// <reference types="mongoose" />
import { PeriodicoService } from '../services/periodico.service';
import { CreatePeriodicoDto, UpdatePeriodicoDto } from '../dtos/periodico.dto';
export declare class PeriodicoController {
    private PeriodicoService;
    constructor(PeriodicoService: PeriodicoService);
    findAll(): Promise<import("../entities/periodico.entity").Periodico[]>;
    get(id: string): Promise<import("../entities/periodico.entity").Periodico>;
    create(payload: CreatePeriodicoDto): Promise<import("../entities/periodico.entity").Periodico>;
    update(id: string, payload: UpdatePeriodicoDto): Promise<import("../entities/periodico.entity").Periodico>;
    remove(id: string): import("mongoose").Query<import("../entities/periodico.entity").Periodico, import("../entities/periodico.entity").Periodico, {}>;
}
