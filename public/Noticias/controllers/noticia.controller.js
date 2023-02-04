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
exports.NoticiaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const noticia_service_1 = require("../services/noticia.service");
const noticia_dto_1 = require("../dtos/noticia.dto");
let NoticiaController = class NoticiaController {
    constructor(NoticiaService) {
        this.NoticiaService = NoticiaService;
    }
    findAll() {
        return this.NoticiaService.findAll();
    }
    get(id) {
        return this.NoticiaService.findOne(id);
    }
    create(payload) {
        return this.NoticiaService.create(payload);
    }
    update(id, payload) {
        return this.NoticiaService.update(id, payload);
    }
    remove(id) {
        return this.NoticiaService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/noticia.entity").Noticia] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticiaController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/noticia.entity").Noticia }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticiaController.prototype, "get", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/noticia.entity").Noticia }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [noticia_dto_1.CreateNoticiaDto]),
    __metadata("design:returntype", void 0)
], NoticiaController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/noticia.entity").Noticia }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, noticia_dto_1.UpdateNoticiaDto]),
    __metadata("design:returntype", void 0)
], NoticiaController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticiaController.prototype, "remove", null);
NoticiaController = __decorate([
    common_1.Controller('noticia'),
    __metadata("design:paramtypes", [noticia_service_1.NoticiaService])
], NoticiaController);
exports.NoticiaController = NoticiaController;
//# sourceMappingURL=noticia.controller.js.map