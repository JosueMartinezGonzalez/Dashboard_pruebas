"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfssModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pdfs_controller_1 = require("./controllers/pdfs.controller");
const pdfs_service_1 = require("./services/pdfs.service");
const pdfs_entity_1 = require("./entities/pdfs.entity");
let PdfssModule = class PdfssModule {
};
PdfssModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: pdfs_entity_1.Pdfs.name,
                    schema: pdfs_entity_1.PdfsSchema,
                },
            ]),
        ],
        controllers: [pdfs_controller_1.PdfsController],
        providers: [pdfs_service_1.PdfsService],
    })
], PdfssModule);
exports.PdfssModule = PdfssModule;
//# sourceMappingURL=pdfs.module.js.map