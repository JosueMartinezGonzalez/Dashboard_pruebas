"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FelicidadesdatasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const felicidadesdata_controller_1 = require("./controllers/felicidadesdata.controller");
const felicidadesdata_service_1 = require("./services/felicidadesdata.service");
const felicidadesdata_entity_1 = require("./entities/felicidadesdata.entity");
const products_module_1 = require("../products/products.module");
let FelicidadesdatasModule = class FelicidadesdatasModule {
};
FelicidadesdatasModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: felicidadesdata_entity_1.Felicidadesdata.name,
                    schema: felicidadesdata_entity_1.FelicidadesdataSchema,
                },
            ]),
        ],
        controllers: [felicidadesdata_controller_1.FelicidadesdataController],
        providers: [felicidadesdata_service_1.FelicidadesdataService],
    })
], FelicidadesdatasModule);
exports.FelicidadesdatasModule = FelicidadesdatasModule;
//# sourceMappingURL=felicidadesdata.module.js.map