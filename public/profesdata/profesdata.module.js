"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesdatasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const profesdata_controller_1 = require("./controllers/profesdata.controller");
const profesdata_service_1 = require("./services/profesdata.service");
const profesdata_entity_1 = require("./entities/profesdata.entity");
const products_module_1 = require("../products/products.module");
let ProfesdatasModule = class ProfesdatasModule {
};
ProfesdatasModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: profesdata_entity_1.Profesdata.name,
                    schema: profesdata_entity_1.ProfesdataSchema,
                },
            ]),
        ],
        controllers: [profesdata_controller_1.ProfesdataController],
        providers: [profesdata_service_1.ProfesdataService],
    })
], ProfesdatasModule);
exports.ProfesdatasModule = ProfesdatasModule;
//# sourceMappingURL=profesdata.module.js.map