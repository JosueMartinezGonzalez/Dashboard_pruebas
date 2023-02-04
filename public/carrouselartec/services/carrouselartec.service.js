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
exports.CarrouselartecService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const carrouselartec_entity_1 = require("../entities/carrouselartec.entity");
let CarrouselartecService = class CarrouselartecService {
    constructor(CarrouselartecModel) {
        this.CarrouselartecModel = CarrouselartecModel;
    }
    findAll() {
        return this.CarrouselartecModel.find().exec();
    }
    async findOne(id) {
        return this.CarrouselartecModel.findById(id);
    }
    create(data) {
        console.log(data);
        const newModel = new this.CarrouselartecModel(data);
        return newModel.save();
    }
    update(id, changes) {
        return this.CarrouselartecModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
    }
    remove(id) {
        return this.CarrouselartecModel.findByIdAndDelete(id);
    }
};
CarrouselartecService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(carrouselartec_entity_1.Carrouselartec.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CarrouselartecService);
exports.CarrouselartecService = CarrouselartecService;
//# sourceMappingURL=carrouselartec.service.js.map