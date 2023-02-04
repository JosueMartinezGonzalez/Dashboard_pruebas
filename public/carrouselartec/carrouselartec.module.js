"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrouselartecModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const carrouselartec_controller_1 = require("./controllers/carrouselartec.controller");
const carrouselartec_service_1 = require("./services/carrouselartec.service");
const carrouselartec_entity_1 = require("./entities/carrouselartec.entity");
const products_module_1 = require("../products/products.module");
let CarrouselartecModule = class CarrouselartecModule {
};
CarrouselartecModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: carrouselartec_entity_1.Carrouselartec.name,
                    schema: carrouselartec_entity_1.CarrouselartecSchema,
                },
            ]),
        ],
        controllers: [carrouselartec_controller_1.CarrouselartecController],
        providers: [carrouselartec_service_1.CarrouselartecService],
    })
], CarrouselartecModule);
exports.CarrouselartecModule = CarrouselartecModule;
//# sourceMappingURL=carrouselartec.module.js.map