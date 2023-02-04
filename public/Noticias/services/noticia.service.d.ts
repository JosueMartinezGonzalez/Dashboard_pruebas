import { Model } from 'mongoose';
import { Noticia } from '../entities/noticia.entity';
import { CreateNoticiaDto, UpdateNoticiaDto } from '../dtos/noticia.dto';
export declare class NoticiaService {
    private NoticiaModel;
    constructor(NoticiaModel: Model<Noticia>);
    findAll(): Promise<Noticia[]>;
    findOne(id: string): Promise<Noticia>;
    create(data: CreateNoticiaDto): Promise<Noticia>;
    update(id: string, changes: UpdateNoticiaDto): Promise<Noticia>;
    remove(id: string): import("mongoose").Query<Noticia, Noticia, {}>;
}
