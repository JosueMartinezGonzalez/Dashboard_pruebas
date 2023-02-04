/// <reference types="mongoose" />
import { CarrouselartecService } from '../services/carrouselartec.service';
import { CreateCarrouselartecDto, UpdateCarrouselartecDto } from '../dtos/carrouselartec.dto';
export declare class CarrouselartecController {
    private CarrouselartecService;
    constructor(CarrouselartecService: CarrouselartecService);
    findAll(): Promise<import("../entities/carrouselartec.entity").Carrouselartec[]>;
    get(id: string): Promise<import("../entities/carrouselartec.entity").Carrouselartec>;
    create(payload: CreateCarrouselartecDto): Promise<import("../entities/carrouselartec.entity").Carrouselartec>;
    update(id: string, payload: UpdateCarrouselartecDto): Promise<import("../entities/carrouselartec.entity").Carrouselartec>;
    remove(id: string): import("mongoose").Query<import("../entities/carrouselartec.entity").Carrouselartec, import("../entities/carrouselartec.entity").Carrouselartec, {}>;
}
