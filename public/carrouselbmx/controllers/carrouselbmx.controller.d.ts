/// <reference types="mongoose" />
import { CarrouselbmxService } from '../services/carrouselbmx.service';
import { CreateCarrouselbmxDto, UpdateCarrouselbmxDto } from '../dtos/carrouselbmx.dto';
export declare class CarrouselbmxController {
    private CarrouselbmxService;
    constructor(CarrouselbmxService: CarrouselbmxService);
    findAll(): Promise<import("../entities/carrouselbmx.entity").Carrouselbmx[]>;
    get(id: string): Promise<import("../entities/carrouselbmx.entity").Carrouselbmx>;
    create(payload: CreateCarrouselbmxDto): Promise<import("../entities/carrouselbmx.entity").Carrouselbmx>;
    update(id: string, payload: UpdateCarrouselbmxDto): Promise<import("../entities/carrouselbmx.entity").Carrouselbmx>;
    remove(id: string): import("mongoose").Query<import("../entities/carrouselbmx.entity").Carrouselbmx, import("../entities/carrouselbmx.entity").Carrouselbmx, {}>;
}
