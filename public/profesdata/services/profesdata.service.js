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
exports.ProfesdataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const profesdata_entity_1 = require("../entities/profesdata.entity");
let ProfesdataService = class ProfesdataService {
    constructor(ProfesdataModel) {
        this.ProfesdataModel = ProfesdataModel;
    }
    findAll() {
        return this.ProfesdataModel.find().exec();
    }
    async findOne(id) {
        return this.ProfesdataModel.findById(id);
    }
    create(data) {
        console.log(data);
        const newModel = new this.ProfesdataModel(data);
        return newModel.save();
    }
    update(id, changes) {
        return this.ProfesdataModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
    }
    remove(id) {
        return this.ProfesdataModel.findByIdAndDelete(id);
    }
};
ProfesdataService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(profesdata_entity_1.Profesdata.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProfesdataService);
exports.ProfesdataService = ProfesdataService;
//# sourceMappingURL=profesdata.service.js.map