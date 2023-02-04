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
exports.NoticiaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const noticia_entity_1 = require("../entities/noticia.entity");
let NoticiaService = class NoticiaService {
    constructor(NoticiaModel) {
        this.NoticiaModel = NoticiaModel;
    }
    findAll() {
        return this.NoticiaModel.find().exec();
    }
    async findOne(id) {
        return this.NoticiaModel.findById(id);
    }
    create(data) {
        console.log(data);
        const newModel = new this.NoticiaModel(data);
        return newModel.save();
    }
    update(id, changes) {
        return this.NoticiaModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
    }
    remove(id) {
        return this.NoticiaModel.findByIdAndDelete(id);
    }
};
NoticiaService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(noticia_entity_1.Noticia.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NoticiaService);
exports.NoticiaService = NoticiaService;
//# sourceMappingURL=noticia.service.js.map