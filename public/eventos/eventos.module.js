"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const eventos_controller_1 = require("./controllers/eventos.controller");
const eventos_service_1 = require("./services/eventos.service");
const eventos_entity_1 = require("./entities/eventos.entity");
let EventosModule = class EventosModule {
};
EventosModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: eventos_entity_1.Eventos.name,
                    schema: eventos_entity_1.EventosSchema,
                },
            ]),
        ],
        controllers: [eventos_controller_1.EventosController],
        providers: [eventos_service_1.EventosService],
    })
], EventosModule);
exports.EventosModule = EventosModule;
//# sourceMappingURL=eventos.module.js.map