import { Model } from 'mongoose';
import { Eventos } from '../entities/eventos.entity';
import { CreateEventosDto, UpdateEventosDto } from '../dtos/eventos.dto';
export declare class EventosService {
    private EventosModel;
    constructor(EventosModel: Model<Eventos>);
    findAll(): Promise<Eventos[]>;
    findOne(id: string): Promise<Eventos>;
    create(data: CreateEventosDto): Promise<Eventos>;
    update(id: string, changes: UpdateEventosDto): Promise<Eventos>;
    remove(id: string): import("mongoose").Query<Eventos, Eventos, {}>;
}
