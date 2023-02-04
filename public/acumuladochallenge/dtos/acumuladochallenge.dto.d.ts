export declare class CreateAcumuladochallengeDto {
    readonly rank: number;
    readonly nombre: string;
    readonly plate: string;
    readonly categoria: string;
    readonly total: number;
}
declare const UpdateAcumuladochallengeDto_base: import("@nestjs/common").Type<Partial<CreateAcumuladochallengeDto>>;
export declare class UpdateAcumuladochallengeDto extends UpdateAcumuladochallengeDto_base {
}
export {};
