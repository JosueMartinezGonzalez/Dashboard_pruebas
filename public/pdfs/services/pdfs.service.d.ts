import { Model } from 'mongoose';
import { Pdfs } from '../entities/pdfs.entity';
import { CreatePdfsDto, UpdatePdfsDto } from '../dtos/pdfs.dto';
export declare class PdfsService {
    private PdfsModel;
    constructor(PdfsModel: Model<Pdfs>);
    findAll(): Promise<Pdfs[]>;
    findOne(id: string): Promise<Pdfs>;
    create(data: CreatePdfsDto): Promise<Pdfs>;
    update(id: string, changes: UpdatePdfsDto): Promise<Pdfs>;
    remove(id: string): import("mongoose").Query<Pdfs, Pdfs, {}>;
}
