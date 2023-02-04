import { Model } from 'mongoose';
import { Calendarios } from '../entities/calendarios.entity';
import { CreateCalendariosDto, UpdateCalendariosDto } from '../dtos/calendarios.dto';
export declare class CalendariosService {
    private CalendariosModel;
    constructor(CalendariosModel: Model<Calendarios>);
    findAll(): Promise<Calendarios[]>;
    findOne(id: string): Promise<Calendarios>;
    create(data: CreateCalendariosDto): Promise<Calendarios>;
    update(id: string, changes: UpdateCalendariosDto): Promise<Calendarios>;
    remove(id: string): import("mongoose").Query<Calendarios, Calendarios, {}>;
}
