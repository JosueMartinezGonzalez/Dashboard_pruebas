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
exports.ServiciosartecController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const serviciosartec_service_1 = require("../services/serviciosartec.service");
const serviciosartec_dto_1 = require("../dtos/serviciosartec.dto");
let ServiciosartecController = class ServiciosartecController {
    constructor(ServiciosartecService) {
        this.ServiciosartecService = ServiciosartecService;
    }
    findAll() {
        return this.ServiciosartecService.findAll();
    }
    get(id) {
        return this.ServiciosartecService.findOne(id);
    }
    create(payload) {
        return this.ServiciosartecService.create(payload);
    }
    update(id, payload) {
        return this.ServiciosartecService.update(id, payload);
    }
    remove(id) {
        return this.ServiciosartecService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/serviciosartec.entity").Serviciosartec] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiciosartecController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/serviciosartec.entity").Serviciosartec }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosartecController.prototype, "get", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/serviciosartec.entity").Serviciosartec }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviciosartec_dto_1.CreateServiciosartecDto]),
    __metadata("design:returntype", void 0)
], ServiciosartecController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/serviciosartec.entity").Serviciosartec }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, serviciosartec_dto_1.UpdateServiciosartecDto]),
    __metadata("design:returntype", void 0)
], ServiciosartecController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosartecController.prototype, "remove", null);
ServiciosartecController = __decorate([
    common_1.Controller('serviciosartec'),
    __metadata("design:paramtypes", [serviciosartec_service_1.ServiciosartecService])
], ServiciosartecController);
exports.ServiciosartecController = ServiciosartecController;
//# sourceMappingURL=serviciosartec.controller.js.map