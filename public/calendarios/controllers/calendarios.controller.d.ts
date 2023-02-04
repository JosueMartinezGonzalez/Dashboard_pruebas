/// <reference types="mongoose" />
import { CalendariosService } from '../services/calendarios.service';
import { CreateCalendariosDto, UpdateCalendariosDto } from '../dtos/calendarios.dto';
export declare class CalendariosController {
    private CalendariosService;
    constructor(CalendariosService: CalendariosService);
    findAll(): Promise<import("../entities/calendarios.entity").Calendarios[]>;
    get(id: string): Promise<import("../entities/calendarios.entity").Calendarios>;
    create(payload: CreateCalendariosDto): Promise<import("../entities/calendarios.entity").Calendarios>;
    update(id: string, payload: UpdateCalendariosDto): Promise<import("../entities/calendarios.entity").Calendarios>;
    remove(id: string): import("mongoose").Query<import("../entities/calendarios.entity").Calendarios, import("../entities/calendarios.entity").Calendarios, {}>;
}
