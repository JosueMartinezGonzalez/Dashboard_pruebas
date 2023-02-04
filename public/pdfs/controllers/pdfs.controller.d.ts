/// <reference types="mongoose" />
import { PdfsService } from '../services/pdfs.service';
import { CreatePdfsDto, UpdatePdfsDto } from '../dtos/pdfs.dto';
export declare class PdfsController {
    private PdfsService;
    constructor(PdfsService: PdfsService);
    findAll(): Promise<import("../entities/pdfs.entity").Pdfs[]>;
    get(id: string): Promise<import("../entities/pdfs.entity").Pdfs>;
    create(payload: CreatePdfsDto): Promise<import("../entities/pdfs.entity").Pdfs>;
    update(id: string, payload: UpdatePdfsDto): Promise<import("../entities/pdfs.entity").Pdfs>;
    remove(id: string): import("mongoose").Query<import("../entities/pdfs.entity").Pdfs, import("../entities/pdfs.entity").Pdfs, {}>;
}
