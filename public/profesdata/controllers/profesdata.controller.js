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
exports.ProfesdataController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const profesdata_service_1 = require("../services/profesdata.service");
const profesdata_dto_1 = require("../dtos/profesdata.dto");
let ProfesdataController = class ProfesdataController {
    constructor(ProfesdataService) {
        this.ProfesdataService = ProfesdataService;
    }
    findAll() {
        return this.ProfesdataService.findAll();
    }
    get(id) {
        return this.ProfesdataService.findOne(id);
    }
    create(payload) {
        return this.ProfesdataService.create(payload);
    }
    update(id, payload) {
        return this.ProfesdataService.update(id, payload);
    }
    remove(id) {
        return this.ProfesdataService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/profesdata.entity").Profesdata] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfesdataController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/profesdata.entity").Profesdata }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesdataController.prototype, "get", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/profesdata.entity").Profesdata }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profesdata_dto_1.CreateProfesdataDto]),
    __metadata("design:returntype", void 0)
], ProfesdataController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/profesdata.entity").Profesdata }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profesdata_dto_1.UpdateProfesdataDto]),
    __metadata("design:returntype", void 0)
], ProfesdataController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesdataController.prototype, "remove", null);
ProfesdataController = __decorate([
    common_1.Controller('profesdata'),
    __metadata("design:paramtypes", [profesdata_service_1.ProfesdataService])
], ProfesdataController);
exports.ProfesdataController = ProfesdataController;
//# sourceMappingURL=profesdata.controller.js.map