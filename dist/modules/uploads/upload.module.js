"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_1 = require("../auth");
const upload_controller_1 = require("./upload.controller");
const services_1 = require("./services");
const entities_1 = require("./entities");
let UploadModule = class UploadModule {
    configure(consumer) {
        consumer.apply(auth_1.AuthMiddleware)
            .forRoutes(upload_controller_1.UploadController);
    }
};
UploadModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => auth_1.AuthModule),
            typeorm_1.TypeOrmModule.forFeature([entities_1.File])
        ],
        controllers: [upload_controller_1.UploadController],
        providers: [services_1.UploadService, services_1.FileService],
        exports: [services_1.FileService, services_1.UploadService]
    })
], UploadModule);
exports.UploadModule = UploadModule;
//# sourceMappingURL=upload.module.js.map