"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcumuladochampshipModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const acumuladochampship_controller_1 = require("./controllers/acumuladochampship.controller");
const acumuladochampship_service_1 = require("./services/acumuladochampship.service");
const acumuladochampship_entity_1 = require("./entities/acumuladochampship.entity");
const products_module_1 = require("../products/products.module");
let AcumuladochampshipModule = class AcumuladochampshipModule {
};
AcumuladochampshipModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: acumuladochampship_entity_1.Acumuladochampship.name,
                    schema: acumuladochampship_entity_1.AcumuladochampshipSchema,
                },
            ]),
        ],
        controllers: [acumuladochampship_controller_1.AcumuladochampshipController],
        providers: [acumuladochampship_service_1.AcumuladochampshipService],
    })
], AcumuladochampshipModule);
exports.AcumuladochampshipModule = AcumuladochampshipModule;
//# sourceMappingURL=acumuladochampship.module.js.map