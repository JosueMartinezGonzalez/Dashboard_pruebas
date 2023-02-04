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
exports.CarrouselartecSchema = exports.Carrouselartec = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Carrouselartec = class Carrouselartec extends mongoose_2.Document {
    static _OPENAPI_METADATA_FACTORY() {
        return { img: { required: true, type: () => String }, titulo: { required: true, type: () => String }, link: { required: true, type: () => String } };
    }
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Carrouselartec.prototype, "img", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Carrouselartec.prototype, "titulo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Carrouselartec.prototype, "link", void 0);
Carrouselartec = __decorate([
    mongoose_1.Schema()
], Carrouselartec);
exports.Carrouselartec = Carrouselartec;
exports.CarrouselartecSchema = mongoose_1.SchemaFactory.createForClass(Carrouselartec);
//# sourceMappingURL=carrouselartec.entity.js.map