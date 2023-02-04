export declare class CreateAcumuladochampshipDto {
    readonly rank: number;
    readonly nombre: string;
    readonly plate: string;
    readonly categoria: string;
    readonly total: number;
}
declare const UpdateAcumuladochampshipDto_base: import("@nestjs/common").Type<Partial<CreateAcumuladochampshipDto>>;
export declare class UpdateAcumuladochampshipDto extends UpdateAcumuladochampshipDto_base {
}
export {};
