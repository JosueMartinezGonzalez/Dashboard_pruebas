export declare class CreateCarrouselartecDto {
    readonly img: string;
    readonly titulo: string;
    readonly link: string;
}
declare const UpdateCarrouselartecDto_base: import("@nestjs/common").Type<Partial<CreateCarrouselartecDto>>;
export declare class UpdateCarrouselartecDto extends UpdateCarrouselartecDto_base {
}
export {};
