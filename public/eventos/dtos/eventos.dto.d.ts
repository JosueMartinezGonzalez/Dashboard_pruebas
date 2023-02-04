export declare class CreateEventosDto {
    readonly linkvideo: string;
    readonly titulo: string;
    readonly descipcion: string;
}
declare const UpdateEventosDto_base: import("@nestjs/common").Type<Partial<CreateEventosDto>>;
export declare class UpdateEventosDto extends UpdateEventosDto_base {
}
export {};
