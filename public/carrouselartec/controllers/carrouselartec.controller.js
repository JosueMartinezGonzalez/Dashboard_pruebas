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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrouselartecController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const carrouselartec_service_1 = require("../services/carrouselartec.service");
const carrouselartec_dto_1 = require("../dtos/carrouselartec.dto");
let CarrouselartecController = class CarrouselartecController {
    constructor(CarrouselartecService) {
        this.CarrouselartecService = CarrouselartecService;
    }
    findAll() {
        return this.CarrouselartecService.findAll();
    }
    get(id) {
        return this.CarrouselartecService.findOne(id);
    }
    create(payload) {
        return this.CarrouselartecService.create(payload);
    }
    update(id, payload) {
        return this.CarrouselartecService.update(id, payload);
    }
    remove(id) {
        return this.CarrouselartecService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/carrouselartec.entity").Carrouselartec] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarrouselartecController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/carrouselartec.entity").Carrouselartec }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarrouselartecController.prototype, "get", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/carrouselartec.entity").Carrouselartec }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carrouselartec_dto_1.CreateCarrouselartecDto]),
    __metadata("design:returntype", void 0)
], CarrouselartecController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/carrouselartec.entity").Carrouselartec }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, carrouselartec_dto_1.UpdateCarrouselartecDto]),
    __metadata("design:returntype", void 0)
], CarrouselartecController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarrouselartecController.prototype, "remove", null);
CarrouselartecController = __decorate([
    common_1.Controller('Carrouselartec'),
    __metadata("design:paramtypes", [carrouselartec_service_1.CarrouselartecService])
], CarrouselartecController);
exports.CarrouselartecController = CarrouselartecController;
//# sourceMappingURL=carrouselartec.controller.js.map