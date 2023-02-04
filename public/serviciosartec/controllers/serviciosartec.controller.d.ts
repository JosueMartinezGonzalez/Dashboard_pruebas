/// <reference types="mongoose" />
import { ServiciosartecService } from '../services/serviciosartec.service';
import { CreateServiciosartecDto, UpdateServiciosartecDto } from '../dtos/serviciosartec.dto';
export declare class ServiciosartecController {
    private ServiciosartecService;
    constructor(ServiciosartecService: ServiciosartecService);
    findAll(): Promise<import("../entities/serviciosartec.entity").Serviciosartec[]>;
    get(id: string): Promise<import("../entities/serviciosartec.entity").Serviciosartec>;
    create(payload: CreateServiciosartecDto): Promise<import("../entities/serviciosartec.entity").Serviciosartec>;
    update(id: string, payload: UpdateServiciosartecDto): Promise<import("../entities/serviciosartec.entity").Serviciosartec>;
    remove(id: string): import("mongoose").Query<import("../entities/serviciosartec.entity").Serviciosartec, import("../entities/serviciosartec.entity").Serviciosartec, {}>;
}
