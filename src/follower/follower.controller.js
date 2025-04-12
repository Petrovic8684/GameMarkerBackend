"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../../../../../../src/auth/guards/jwt-auth.guard");
var roles_guard_1 = require("../../../../../../../src/auth/guards/roles.guard");
var role_decorator_1 = require("../../../../../../../src/auth/decorators/role.decorator");
var role_enum_1 = require("../../../../../../../src/common/enums/role.enum");
var FollowerController = function () {
    var _classDecorators = [(0, common_1.Controller)('followers')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _findFollowerListOfUser_decorators;
    var _followUser_decorators;
    var _unfollowUser_decorators;
    var _dismissFollow_decorators;
    var FollowerController = _classThis = /** @class */ (function () {
        function FollowerController_1(followerService) {
            this.followerService = (__runInitializers(this, _instanceExtraInitializers), followerService);
        }
        FollowerController_1.prototype.findFollowerListOfUser = function (id) {
            return this.followerService.findFollowerListOfUser(+id);
        };
        FollowerController_1.prototype.followUser = function (id) {
            return this.followerService.followUser(+id);
        };
        FollowerController_1.prototype.unfollowUser = function (id) {
            return this.followerService.unfollowUser(+id);
        };
        FollowerController_1.prototype.dismissFollow = function (id) {
            return this.followerService.dismissFollow(+id);
        };
        return FollowerController_1;
    }());
    __setFunctionName(_classThis, "FollowerController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _findFollowerListOfUser_decorators = [(0, common_1.Get)('/user/:id')];
        _followUser_decorators = [(0, common_1.Post)('/user/:id'), (0, role_decorator_1.Role)([role_enum_1.Role.regular, role_enum_1.Role.admin]), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
        _unfollowUser_decorators = [(0, common_1.Delete)('/user/:id'), (0, role_decorator_1.Role)([role_enum_1.Role.regular, role_enum_1.Role.admin]), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
        _dismissFollow_decorators = [(0, common_1.Patch)(':id'), (0, role_decorator_1.Role)([role_enum_1.Role.regular, role_enum_1.Role.admin]), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard)];
        __esDecorate(_classThis, null, _findFollowerListOfUser_decorators, { kind: "method", name: "findFollowerListOfUser", static: false, private: false, access: { has: function (obj) { return "findFollowerListOfUser" in obj; }, get: function (obj) { return obj.findFollowerListOfUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _followUser_decorators, { kind: "method", name: "followUser", static: false, private: false, access: { has: function (obj) { return "followUser" in obj; }, get: function (obj) { return obj.followUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _unfollowUser_decorators, { kind: "method", name: "unfollowUser", static: false, private: false, access: { has: function (obj) { return "unfollowUser" in obj; }, get: function (obj) { return obj.unfollowUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _dismissFollow_decorators, { kind: "method", name: "dismissFollow", static: false, private: false, access: { has: function (obj) { return "dismissFollow" in obj; }, get: function (obj) { return obj.dismissFollow; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FollowerController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FollowerController = _classThis;
}();
exports.FollowerController = FollowerController;
