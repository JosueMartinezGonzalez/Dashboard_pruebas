"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrouselbmxsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const carrouselbmx_controller_1 = require("./controllers/carrouselbmx.controller");
const carrouselbmx_service_1 = require("./services/carrouselbmx.service");
const carrouselbmx_entity_1 = require("./entities/carrouselbmx.entity");
const products_module_1 = require("../products/products.module");
let CarrouselbmxsModule = class CarrouselbmxsModule {
};
CarrouselbmxsModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: carrouselbmx_entity_1.Carrouselbmx.name,
                    schema: carrouselbmx_entity_1.CarrouselbmxSchema,
                },
            ]),
        ],
        controllers: [carrouselbmx_controller_1.CarrouselbmxController],
        providers: [carrouselbmx_service_1.CarrouselbmxService],
    })
], CarrouselbmxsModule);
exports.CarrouselbmxsModule = CarrouselbmxsModule;
//# sourceMappingURL=carrouselbmx.module.js.map