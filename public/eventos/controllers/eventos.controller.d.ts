/// <reference types="mongoose" />
import { EventosService } from '../services/eventos.service';
import { CreateEventosDto, UpdateEventosDto } from '../dtos/eventos.dto';
export declare class EventosController {
    private EventosService;
    constructor(EventosService: EventosService);
    findAll(): Promise<import("../entities/eventos.entity").Eventos[]>;
    get(id: string): Promise<import("../entities/eventos.entity").Eventos>;
    create(payload: CreateEventosDto): Promise<import("../entities/eventos.entity").Eventos>;
    update(id: string, payload: UpdateEventosDto): Promise<import("../entities/eventos.entity").Eventos>;
    remove(id: string): import("mongoose").Query<import("../entities/eventos.entity").Eventos, import("../entities/eventos.entity").Eventos, {}>;
}
