"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendariosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const calendarios_controller_1 = require("./controllers/calendarios.controller");
const calendarios_service_1 = require("./services/calendarios.service");
const calendarios_entity_1 = require("./entities/calendarios.entity");
let CalendariosModule = class CalendariosModule {
};
CalendariosModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: calendarios_entity_1.Calendarios.name,
                    schema: calendarios_entity_1.CalendariosSchema,
                },
            ]),
        ],
        controllers: [calendarios_controller_1.CalendariosController],
        providers: [calendarios_service_1.CalendariosService],
    })
], CalendariosModule);
exports.CalendariosModule = CalendariosModule;
//# sourceMappingURL=calendarios.module.js.map