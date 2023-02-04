import { Model } from 'mongoose';
import { Carrouselbmx } from '../entities/carrouselbmx.entity';
import { CreateCarrouselbmxDto, UpdateCarrouselbmxDto } from '../dtos/carrouselbmx.dto';
export declare class CarrouselbmxService {
    private CarrouselbmxModel;
    constructor(CarrouselbmxModel: Model<Carrouselbmx>);
    findAll(): Promise<Carrouselbmx[]>;
    findOne(id: string): Promise<Carrouselbmx>;
    create(data: CreateCarrouselbmxDto): Promise<Carrouselbmx>;
    update(id: string, changes: UpdateCarrouselbmxDto): Promise<Carrouselbmx>;
    remove(id: string): import("mongoose").Query<Carrouselbmx, Carrouselbmx, {}>;
}
