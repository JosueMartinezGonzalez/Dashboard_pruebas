"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodicoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const periodico_controller_1 = require("./controllers/periodico.controller");
const periodico_service_1 = require("./services/periodico.service");
const periodico_entity_1 = require("./entities/periodico.entity");
let PeriodicoModule = class PeriodicoModule {
};
PeriodicoModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: periodico_entity_1.Periodico.name,
                    schema: periodico_entity_1.PeriodicoSchema,
                },
            ]),
        ],
        controllers: [periodico_controller_1.PeriodicoController],
        providers: [periodico_service_1.PeriodicoService],
    })
], PeriodicoModule);
exports.PeriodicoModule = PeriodicoModule;
//# sourceMappingURL=periodico.module.js.map