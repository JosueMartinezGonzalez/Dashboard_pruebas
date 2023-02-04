"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosartecModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const serviciosartec_controller_1 = require("./controllers/serviciosartec.controller");
const serviciosartec_service_1 = require("./services/serviciosartec.service");
const serviciosartec_entity_1 = require("./entities/serviciosartec.entity");
let ServiciosartecModule = class ServiciosartecModule {
};
ServiciosartecModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: serviciosartec_entity_1.Serviciosartec.name,
                    schema: serviciosartec_entity_1.ServiciosartecSchema,
                },
            ]),
        ],
        controllers: [serviciosartec_controller_1.ServiciosartecController],
        providers: [serviciosartec_service_1.ServiciosartecService],
    })
], ServiciosartecModule);
exports.ServiciosartecModule = ServiciosartecModule;
//# sourceMappingURL=serviciosartec.module.js.map