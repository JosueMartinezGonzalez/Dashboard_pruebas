"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductsToOrderDto = exports.UpdateOrderDto = exports.CreateOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { customer: { required: true, type: () => String }, date: { required: true, type: () => Date }, products: { required: true, type: () => [String] } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "customer", void 0);
__decorate([
    class_validator_1.IsDate(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], CreateOrderDto.prototype, "date", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
exports.CreateOrderDto = CreateOrderDto;
class UpdateOrderDto extends swagger_1.PartialType(swagger_1.OmitType(CreateOrderDto, ['products'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateOrderDto = UpdateOrderDto;
class AddProductsToOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { productsIds: { required: true, type: () => [String] } };
    }
}
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], AddProductsToOrderDto.prototype, "productsIds", void 0);
exports.AddProductsToOrderDto = AddProductsToOrderDto;
//# sourceMappingURL=order.dto.js.map