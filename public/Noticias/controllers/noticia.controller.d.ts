/// <reference types="mongoose" />
import { NoticiaService } from '../services/noticia.service';
import { CreateNoticiaDto, UpdateNoticiaDto } from '../dtos/noticia.dto';
export declare class NoticiaController {
    private NoticiaService;
    constructor(NoticiaService: NoticiaService);
    findAll(): Promise<import("../entities/noticia.entity").Noticia[]>;
    get(id: string): Promise<import("../entities/noticia.entity").Noticia>;
    create(payload: CreateNoticiaDto): Promise<import("../entities/noticia.entity").Noticia>;
    update(id: string, payload: UpdateNoticiaDto): Promise<import("../entities/noticia.entity").Noticia>;
    remove(id: string): import("mongoose").Query<import("../entities/noticia.entity").Noticia, import("../entities/noticia.entity").Noticia, {}>;
}
