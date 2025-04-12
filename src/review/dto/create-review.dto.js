"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewDto = void 0;
var class_validator_1 = require("class-validator");
var prisma_1 = require("../../../generated/prisma");
var CreateReviewDto = function () {
    var _a;
    var _rating_decorators;
    var _rating_initializers = [];
    var _rating_extraInitializers = [];
    var _comment_decorators;
    var _comment_initializers = [];
    var _comment_extraInitializers = [];
    var _completed_decorators;
    var _completed_initializers = [];
    var _completed_extraInitializers = [];
    var _platform_decorators;
    var _platform_initializers = [];
    var _platform_extraInitializers = [];
    var _difficulty_decorators;
    var _difficulty_initializers = [];
    var _difficulty_extraInitializers = [];
    var _gameId_decorators;
    var _gameId_initializers = [];
    var _gameId_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateReviewDto() {
                this.rating = __runInitializers(this, _rating_initializers, void 0);
                this.comment = (__runInitializers(this, _rating_extraInitializers), __runInitializers(this, _comment_initializers, void 0));
                this.completed = (__runInitializers(this, _comment_extraInitializers), __runInitializers(this, _completed_initializers, void 0));
                this.platform = (__runInitializers(this, _completed_extraInitializers), __runInitializers(this, _platform_initializers, void 0));
                this.difficulty = (__runInitializers(this, _platform_extraInitializers), __runInitializers(this, _difficulty_initializers, void 0));
                this.gameId = (__runInitializers(this, _difficulty_extraInitializers), __runInitializers(this, _gameId_initializers, void 0));
                __runInitializers(this, _gameId_extraInitializers);
            }
            return CreateReviewDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _rating_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(10)];
            _comment_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _completed_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _platform_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _difficulty_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(prisma_1.Difficulty, {
                    message: 'Difficulty must be one of the predefined values',
                })];
            _gameId_decorators = [(0, class_validator_1.IsInt)()];
            __esDecorate(null, null, _rating_decorators, { kind: "field", name: "rating", static: false, private: false, access: { has: function (obj) { return "rating" in obj; }, get: function (obj) { return obj.rating; }, set: function (obj, value) { obj.rating = value; } }, metadata: _metadata }, _rating_initializers, _rating_extraInitializers);
            __esDecorate(null, null, _comment_decorators, { kind: "field", name: "comment", static: false, private: false, access: { has: function (obj) { return "comment" in obj; }, get: function (obj) { return obj.comment; }, set: function (obj, value) { obj.comment = value; } }, metadata: _metadata }, _comment_initializers, _comment_extraInitializers);
            __esDecorate(null, null, _completed_decorators, { kind: "field", name: "completed", static: false, private: false, access: { has: function (obj) { return "completed" in obj; }, get: function (obj) { return obj.completed; }, set: function (obj, value) { obj.completed = value; } }, metadata: _metadata }, _completed_initializers, _completed_extraInitializers);
            __esDecorate(null, null, _platform_decorators, { kind: "field", name: "platform", static: false, private: false, access: { has: function (obj) { return "platform" in obj; }, get: function (obj) { return obj.platform; }, set: function (obj, value) { obj.platform = value; } }, metadata: _metadata }, _platform_initializers, _platform_extraInitializers);
            __esDecorate(null, null, _difficulty_decorators, { kind: "field", name: "difficulty", static: false, private: false, access: { has: function (obj) { return "difficulty" in obj; }, get: function (obj) { return obj.difficulty; }, set: function (obj, value) { obj.difficulty = value; } }, metadata: _metadata }, _difficulty_initializers, _difficulty_extraInitializers);
            __esDecorate(null, null, _gameId_decorators, { kind: "field", name: "gameId", static: false, private: false, access: { has: function (obj) { return "gameId" in obj; }, get: function (obj) { return obj.gameId; }, set: function (obj, value) { obj.gameId = value; } }, metadata: _metadata }, _gameId_initializers, _gameId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateReviewDto = CreateReviewDto;
