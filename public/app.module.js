"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const noticias_module_1 = require("./noticias/noticias.module");
const carrouselbmx_module_1 = require("./carrouselbmx/carrouselbmx.module");
const videos_module_1 = require("./videos/videos.module");
const profesdata_module_1 = require("./profesdata/profesdata.module");
const testimoniosdata_module_1 = require("./testimoniosdata/testimoniosdata.module");
const pdfs_module_1 = require("./pdfs/pdfs.module");
const eventos_module_1 = require("./eventos/eventos.module");
const periodico_module_1 = require("./periodico/periodico.module");
const calendarios_module_1 = require("./calendarios/calendarios.module");
const carrouselartec_module_1 = require("./carrouselartec/carrouselartec.module");
const clientesartec_module_1 = require("./clientesartec/clientesartec.module");
const serviciosartec_module_1 = require("./serviciosartec/serviciosartec.module");
const acumuladochampship_module_1 = require("./acumuladochampship/acumuladochampship.module");
const acumuladochallenge_module_1 = require("./acumuladochallenge/acumuladochallenge.module");
const products_module_1 = require("./products/products.module");
const database_module_1 = require("./database/database.module");
const enviroments_1 = require("./enviroments");
const config_2 = require("./config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    API_KEY: Joi.number().required(),
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_PORT: Joi.number().required(),
                }),
            }),
            common_1.HttpModule,
            users_module_1.UsersModule,
            noticias_module_1.NoticiasModule,
            carrouselbmx_module_1.CarrouselbmxsModule,
            videos_module_1.VideosModule,
            profesdata_module_1.ProfesdatasModule,
            testimoniosdata_module_1.TestimoniosdatasModule,
            pdfs_module_1.PdfssModule,
            eventos_module_1.EventosModule,
            periodico_module_1.PeriodicoModule,
            calendarios_module_1.CalendariosModule,
            carrouselartec_module_1.CarrouselartecModule,
            clientesartec_module_1.ClientesartecModule,
            serviciosartec_module_1.ServiciosartecModule,
            acumuladochampship_module_1.AcumuladochampshipModule,
            acumuladochallenge_module_1.AcumuladochallengeModule,
            products_module_1.ProductsModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'TASKS',
                useFactory: async (http) => {
                    const tasks = await http
                        .get('https://jsonplaceholder.typicode.com/todos')
                        .toPromise();
                    return tasks.data;
                },
                inject: [common_1.HttpService],
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map