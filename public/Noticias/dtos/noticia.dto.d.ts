export declare class CreateNoticiaDto {
    readonly img: string;
    readonly titulo: string;
    readonly date: Date;
    readonly descripcion: string;
    readonly contenido: string;
}
declare const UpdateNoticiaDto_base: import("@nestjs/common").Type<Partial<CreateNoticiaDto>>;
export declare class UpdateNoticiaDto extends UpdateNoticiaDto_base {
}
export {};
