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
exports.FelicidadesdataController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const felicidadesdata_service_1 = require("../services/felicidadesdata.service");
const felicidadesdata_dto_1 = require("../dtos/felicidadesdata.dto");
let FelicidadesdataController = class FelicidadesdataController {
    constructor(FelicidadesdataService) {
        this.FelicidadesdataService = FelicidadesdataService;
    }
    findAll() {
        return this.FelicidadesdataService.findAll();
    }
    get(id) {
        return this.FelicidadesdataService.findOne(id);
    }
    create(payload) {
        return this.FelicidadesdataService.create(payload);
    }
    update(id, payload) {
        return this.FelicidadesdataService.update(id, payload);
    }
    remove(id) {
        return this.FelicidadesdataService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/felicidadesdata.entity").Felicidadesdata] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FelicidadesdataController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/felicidadesdata.entity").Felicidadesdata }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FelicidadesdataController.prototype, "get", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/felicidadesdata.entity").Felicidadesdata }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [felicidadesdata_dto_1.CreateFelicidadesdataDto]),
    __metadata("design:returntype", void 0)
], FelicidadesdataController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/felicidadesdata.entity").Felicidadesdata }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, felicidadesdata_dto_1.UpdateFelicidadesdataDto]),
    __metadata("design:returntype", void 0)
], FelicidadesdataController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FelicidadesdataController.prototype, "remove", null);
FelicidadesdataController = __decorate([
    common_1.Controller('Felicidadesdata'),
    __metadata("design:paramtypes", [felicidadesdata_service_1.FelicidadesdataService])
], FelicidadesdataController);
exports.FelicidadesdataController = FelicidadesdataController;
//# sourceMappingURL=felicidadesdata.controller.js.map