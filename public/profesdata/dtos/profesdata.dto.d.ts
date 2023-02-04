export declare class CreateProfesdataDto {
    readonly img: string;
    readonly nombre: string;
    readonly titulo: string;
    readonly texto: string;
}
declare const UpdateProfesdataDto_base: import("@nestjs/common").Type<Partial<CreateProfesdataDto>>;
export declare class UpdateProfesdataDto extends UpdateProfesdataDto_base {
}
export {};
