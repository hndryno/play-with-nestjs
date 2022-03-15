"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    let app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [`${process.env.RABBITMQ_URL}`],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    common_1.Logger.log(JSON.stringify(app.listen()));
}
bootstrap();
//# sourceMappingURL=listener.js.map