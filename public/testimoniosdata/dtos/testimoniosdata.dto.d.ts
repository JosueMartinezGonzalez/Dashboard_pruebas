export declare class CreateTestimoniosdataDto {
    readonly img: string;
    readonly nombre: string;
    readonly titulo: string;
    readonly texto: string;
}
declare const UpdateTestimoniosdataDto_base: import("@nestjs/common").Type<Partial<CreateTestimoniosdataDto>>;
export declare class UpdateTestimoniosdataDto extends UpdateTestimoniosdataDto_base {
}
export {};
