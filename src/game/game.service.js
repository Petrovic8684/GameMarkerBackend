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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var rawg_url_1 = require("../../../../../../../src/common/rawg.url");
var GameService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GameService = _classThis = /** @class */ (function () {
        function GameService_1(httpService) {
            this.httpService = httpService;
        }
        GameService_1.prototype.findAll = function (page, pageSize, search) {
            return __awaiter(this, void 0, void 0, function () {
                var gameOverviews, gameIds, gameDetailsPromises, gameDetails, games, error_1;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games?key=").concat(process.env.RAWG_KEY, "&page=").concat(page, "&page_size=").concat(pageSize, "&search=").concat(search)))];
                        case 1:
                            gameOverviews = _b.sent();
                            gameIds = gameOverviews.data.results.map(function (game) { return game.id; });
                            gameDetailsPromises = gameIds.map(function (id) {
                                return (0, rxjs_1.firstValueFrom)(_this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(id, "?key=").concat(process.env.RAWG_KEY)));
                            });
                            return [4 /*yield*/, Promise.all(gameDetailsPromises)];
                        case 2:
                            gameDetails = _b.sent();
                            games = gameDetails.map(function (response) {
                                var game = response.data;
                                return {
                                    id: game.id,
                                    name: game.name,
                                    description: game.description,
                                    released: game.released,
                                    background_image: game.background_image,
                                    saturated_color: game.saturated_color,
                                    dominant_color: game.dominant_color,
                                    genres: game.genres.map(function (genre) { return genre.name; }),
                                };
                            });
                            return [2 /*return*/, { message: 'Successfully found games', games: games }];
                        case 3:
                            error_1 = _b.sent();
                            throw new common_1.HttpException(error_1.message, ((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.status) || 500);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        GameService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var url, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            url = "".concat(rawg_url_1.rawg_url, "/games/").concat(id, "?key=").concat(process.env.RAWG_KEY);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get(url))];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, { message: 'Successfully found game', game: response.data }];
                        case 2:
                            error_2 = _a.sent();
                            if (error_2.response.status === 404)
                                throw new common_1.NotFoundException("Game with ID ".concat(id, " not found"));
                            else
                                throw new common_1.HttpException(error_2.message, error_2.response.status);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return GameService_1;
    }());
    __setFunctionName(_classThis, "GameService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GameService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GameService = _classThis;
}();
exports.GameService = GameService;
