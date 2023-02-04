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
exports.FelicidadesdataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const felicidadesdata_entity_1 = require("../entities/felicidadesdata.entity");
let FelicidadesdataService = class FelicidadesdataService {
    constructor(FelicidadesdataModel) {
        this.FelicidadesdataModel = FelicidadesdataModel;
    }
    findAll() {
        return this.FelicidadesdataModel.find().exec();
    }
    async findOne(id) {
        return this.FelicidadesdataModel.findById(id);
    }
    create(data) {
        console.log(data);
        const newModel = new this.FelicidadesdataModel(data);
        return newModel.save();
    }
    update(id, changes) {
        return this.FelicidadesdataModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
    }
    remove(id) {
        return this.FelicidadesdataModel.findByIdAndDelete(id);
    }
};
FelicidadesdataService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(felicidadesdata_entity_1.Felicidadesdata.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FelicidadesdataService);
exports.FelicidadesdataService = FelicidadesdataService;
//# sourceMappingURL=felicidadesdata.service.js.map