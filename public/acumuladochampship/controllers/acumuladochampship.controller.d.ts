/// <reference types="mongoose" />
import { AcumuladochampshipService } from '../services/acumuladochampship.service';
import { CreateAcumuladochampshipDto, UpdateAcumuladochampshipDto } from '../dtos/acumuladochampship.dto';
export declare class AcumuladochampshipController {
    private AcumuladochampshipService;
    constructor(AcumuladochampshipService: AcumuladochampshipService);
    findAll(): Promise<import("../entities/acumuladochampship.entity").Acumuladochampship[]>;
    get(id: string): Promise<import("../entities/acumuladochampship.entity").Acumuladochampship>;
    create(payload: CreateAcumuladochampshipDto): Promise<import("../entities/acumuladochampship.entity").Acumuladochampship>;
    update(id: string, payload: UpdateAcumuladochampshipDto): Promise<import("../entities/acumuladochampship.entity").Acumuladochampship>;
    remove(id: string): import("mongoose").Query<import("../entities/acumuladochampship.entity").Acumuladochampship, import("../entities/acumuladochampship.entity").Acumuladochampship, {}>;
}
