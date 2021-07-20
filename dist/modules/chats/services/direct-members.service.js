"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectMembersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
let DirectMembersService = class DirectMembersService {
    constructor(repository) {
        this.repository = repository;
    }
    findOne(options) {
        return this.repository.findOne(options);
    }
    create(partial) {
        const member = this.repository.create(partial);
        return this.repository.save(member);
    }
    find(options) {
        return this.repository.find(options);
    }
    async update(criteria, partial, { retrieve }) {
        let result = await this.repository.update(criteria, partial);
        if (retrieve)
            result = await this.repository.find({ where: criteria });
        return result;
    }
};
DirectMembersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_1.DirectMember)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DirectMembersService);
exports.DirectMembersService = DirectMembersService;
//# sourceMappingURL=direct-members.service.js.map