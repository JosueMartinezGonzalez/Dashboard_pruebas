export declare class CreateFelicidadesdataDto {
    readonly img: string;
    readonly nombre: string;
    readonly plate: string;
    readonly texto: string;
    readonly categoria: string;
    readonly nuevaCategoria: string;
}
declare const UpdateFelicidadesdataDto_base: import("@nestjs/common").Type<Partial<CreateFelicidadesdataDto>>;
export declare class UpdateFelicidadesdataDto extends UpdateFelicidadesdataDto_base {
}
export {};
