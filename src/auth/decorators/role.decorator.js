"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var common_1 = require("@nestjs/common");
var Role = function (roles) { return (0, common_1.SetMetadata)('roles', roles); };
exports.Role = Role;
