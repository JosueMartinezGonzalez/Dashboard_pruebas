/// <reference types="mongoose" />
import { TestimoniosdataService } from '../services/testimoniosdata.service';
import { CreateTestimoniosdataDto, UpdateTestimoniosdataDto } from '../dtos/testimoniosdata.dto';
export declare class TestimoniosdataController {
    private TestimoniosdataService;
    constructor(TestimoniosdataService: TestimoniosdataService);
    findAll(): Promise<import("../entities/testimoniosdata.entity").Testimoniosdata[]>;
    get(id: string): Promise<import("../entities/testimoniosdata.entity").Testimoniosdata>;
    create(payload: CreateTestimoniosdataDto): Promise<import("../entities/testimoniosdata.entity").Testimoniosdata>;
    update(id: string, payload: UpdateTestimoniosdataDto): Promise<import("../entities/testimoniosdata.entity").Testimoniosdata>;
    remove(id: string): import("mongoose").Query<import("../entities/testimoniosdata.entity").Testimoniosdata, import("../entities/testimoniosdata.entity").Testimoniosdata, {}>;
}
