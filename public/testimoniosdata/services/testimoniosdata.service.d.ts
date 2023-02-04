import { Model } from 'mongoose';
import { Testimoniosdata } from '../entities/testimoniosdata.entity';
import { CreateTestimoniosdataDto, UpdateTestimoniosdataDto } from '../dtos/testimoniosdata.dto';
export declare class TestimoniosdataService {
    private TestimoniosdataModel;
    constructor(TestimoniosdataModel: Model<Testimoniosdata>);
    findAll(): Promise<Testimoniosdata[]>;
    findOne(id: string): Promise<Testimoniosdata>;
    create(data: CreateTestimoniosdataDto): Promise<Testimoniosdata>;
    update(id: string, changes: UpdateTestimoniosdataDto): Promise<Testimoniosdata>;
    remove(id: string): import("mongoose").Query<Testimoniosdata, Testimoniosdata, {}>;
}
