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
exports.AcumuladochampshipSchema = exports.Acumuladochampship = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Acumuladochampship = class Acumuladochampship extends mongoose_2.Document {
    static _OPENAPI_METADATA_FACTORY() {
        return { rank: { required: true, type: () => Number }, nombre: { required: true, type: () => String }, plate: { required: true, type: () => String }, categoria: { required: true, type: () => String }, total: { required: true, type: () => Number } };
    }
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Acumuladochampship.prototype, "rank", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Acumuladochampship.prototype, "nombre", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Acumuladochampship.prototype, "plate", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Acumuladochampship.prototype, "categoria", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Acumuladochampship.prototype, "total", void 0);
Acumuladochampship = __decorate([
    mongoose_1.Schema()
], Acumuladochampship);
exports.Acumuladochampship = Acumuladochampship;
exports.AcumuladochampshipSchema = mongoose_1.SchemaFactory.createForClass(Acumuladochampship);
//# sourceMappingURL=acumuladochampship.entity.js.map