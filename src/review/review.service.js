"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var rawg_url_1 = require("../../../../../../../src/common/rawg.url");
var role_enum_1 = require("../../../../../../../src/common/enums/role.enum");
var ReviewService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ReviewService = _classThis = /** @class */ (function () {
        function ReviewService_1(prisma, authUserService, httpService) {
            this.prisma = prisma;
            this.authUserService = authUserService;
            this.httpService = httpService;
        }
        ReviewService_1.prototype.create = function (createReviewDto) {
            return __awaiter(this, void 0, void 0, function () {
                var rating, comment, completed, platform, difficulty, gameId, existingReview, error_1, newReview;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            rating = createReviewDto.rating, comment = createReviewDto.comment, completed = createReviewDto.completed, platform = createReviewDto.platform, difficulty = createReviewDto.difficulty, gameId = createReviewDto.gameId;
                            return [4 /*yield*/, this.prisma.review.findFirst({
                                    where: { gameId: gameId, createdBy: this.authUserService.user.id },
                                })];
                        case 1:
                            existingReview = _a.sent();
                            if (existingReview)
                                throw new common_1.BadRequestException('You have already submitted a review for this game');
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(gameId, "?key=").concat(process.env.RAWG_KEY)))];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            if (error_1.response.status === 404)
                                throw new common_1.NotFoundException("Game with ID ".concat(gameId, " not found"));
                            else
                                throw new common_1.HttpException(error_1.message, error_1.response.status);
                            return [3 /*break*/, 5];
                        case 5: return [4 /*yield*/, this.prisma.review.create({
                                data: {
                                    rating: rating,
                                    comment: comment,
                                    completed: completed,
                                    platform: platform,
                                    difficulty: difficulty,
                                    gameId: gameId,
                                    createdBy: this.authUserService.user.id,
                                },
                            })];
                        case 6:
                            newReview = _a.sent();
                            return [2 /*return*/, {
                                    message: 'Review successfully created',
                                    review: __assign(__assign({}, newReview), { createdBy: this.authUserService.user }),
                                }];
                    }
                });
            });
        };
        // TODO: pagination
        ReviewService_1.prototype.findAllLandingReviews = function () {
            return __awaiter(this, void 0, void 0, function () {
                var followingUsers, followingUserIds, reviews, completeReviews;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.follower.findMany({
                                where: { followerId: this.authUserService.user.id },
                                select: { followedId: true },
                            })];
                        case 1:
                            followingUsers = _a.sent();
                            followingUserIds = followingUsers.map(function (follow) { return follow.followedId; });
                            return [4 /*yield*/, this.prisma.review.findMany({
                                    where: {
                                        createdBy: { in: followingUserIds },
                                    },
                                    include: {
                                        user: {
                                            select: {
                                                id: true,
                                                username: true,
                                                email: true,
                                                role: true,
                                                image: true,
                                                gender: true,
                                                bio: true,
                                            },
                                        },
                                    },
                                    orderBy: {
                                        createdAt: 'desc',
                                    },
                                })];
                        case 2:
                            reviews = _a.sent();
                            return [4 /*yield*/, Promise.all(reviews.map(function (review) { return __awaiter(_this, void 0, void 0, function () {
                                    var gameResponse, game, gameInfo, user, reviewWithoutUser, error_2;
                                    var _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                _c.trys.push([0, 2, , 3]);
                                                return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(review.gameId, "?key=").concat(process.env.RAWG_KEY)))];
                                            case 1:
                                                gameResponse = _c.sent();
                                                game = gameResponse.data;
                                                gameInfo = {
                                                    id: game.id,
                                                    name: game.name,
                                                    description: game.description,
                                                    released: game.released,
                                                    background_image: game.background_image,
                                                    saturated_color: game.saturated_color,
                                                    dominant_color: game.dominant_color,
                                                    genres: game.genres.map(function (genre) { return genre.name; }),
                                                };
                                                user = review.user, reviewWithoutUser = __rest(review, ["user"]);
                                                return [2 /*return*/, __assign(__assign({}, reviewWithoutUser), { createdBy: user, game: gameInfo })];
                                            case 2:
                                                error_2 = _c.sent();
                                                if (((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                                    throw new common_1.NotFoundException("Game with ID ".concat(review.gameId, " not found"));
                                                }
                                                else {
                                                    throw new common_1.HttpException(error_2.message, (_b = error_2.response) === null || _b === void 0 ? void 0 : _b.status);
                                                }
                                                return [3 /*break*/, 3];
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                        case 3:
                            completeReviews = _a.sent();
                            return [2 /*return*/, {
                                    message: 'Successfully found all landing reviews',
                                    reviews: completeReviews,
                                }];
                    }
                });
            });
        };
        // TODO: pagination
        ReviewService_1.prototype.findAllReviewsOfUser = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var user, newFollowersCount, reviews, reviewsWithGameInfo;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                                where: { id: id },
                                select: {
                                    id: true,
                                    username: true,
                                    email: true,
                                    role: true,
                                    image: true,
                                    gender: true,
                                    bio: true,
                                },
                            })];
                        case 1:
                            user = _a.sent();
                            if (!user)
                                throw new common_1.NotFoundException("User with ID ".concat(id, " not found"));
                            return [4 /*yield*/, this.prisma.follower.count({
                                    where: {
                                        followedId: id,
                                        dismissed: false,
                                    },
                                })];
                        case 2:
                            newFollowersCount = _a.sent();
                            return [4 /*yield*/, this.prisma.review.findMany({
                                    where: {
                                        createdBy: id,
                                    },
                                })];
                        case 3:
                            reviews = _a.sent();
                            return [4 /*yield*/, Promise.all(reviews.map(function (review) { return __awaiter(_this, void 0, void 0, function () {
                                    var createdBy, reviewWithoutUser, gameResponse, game, gameInfo, error_3;
                                    var _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                createdBy = review.createdBy, reviewWithoutUser = __rest(review, ["createdBy"]);
                                                _c.label = 1;
                                            case 1:
                                                _c.trys.push([1, 3, , 4]);
                                                return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(review.gameId, "?key=").concat(process.env.RAWG_KEY)))];
                                            case 2:
                                                gameResponse = _c.sent();
                                                game = gameResponse.data;
                                                gameInfo = {
                                                    id: game.id,
                                                    name: game.name,
                                                    description: game.description,
                                                    released: game.released,
                                                    background_image: game.background_image,
                                                    saturated_color: game.saturated_color,
                                                    dominant_color: game.dominant_color,
                                                    genres: game.genres.map(function (genre) { return genre.name; }),
                                                };
                                                return [2 /*return*/, __assign(__assign({}, reviewWithoutUser), { game: gameInfo, gameId: undefined })];
                                            case 3:
                                                error_3 = _c.sent();
                                                if (((_a = error_3.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                                    throw new common_1.NotFoundException("Game with ID ".concat(review.gameId, " not found"));
                                                }
                                                else {
                                                    throw new common_1.HttpException(error_3.message, (_b = error_3.response) === null || _b === void 0 ? void 0 : _b.status);
                                                }
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                        case 4:
                            reviewsWithGameInfo = _a.sent();
                            return [2 /*return*/, {
                                    message: "Successfully found all reviews of user with ID ".concat(id),
                                    user: __assign(__assign({}, user), { newFollowersCount: newFollowersCount }),
                                    reviews: reviewsWithGameInfo,
                                }];
                    }
                });
            });
        };
        ReviewService_1.prototype.findAllReviewsOfGame = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var gameInfo, gameResponse, game, error_4, reviews, reviewsWithUserInfo;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(id, "?key=").concat(process.env.RAWG_KEY)))];
                        case 1:
                            gameResponse = _c.sent();
                            game = gameResponse.data;
                            gameInfo = {
                                id: game.id,
                                slug: game.slug,
                                name: game.name,
                                description: game.description,
                                released: game.released,
                                background_image: game.background_image,
                                saturated_color: game.saturated_color,
                                dominant_color: game.dominant_color,
                                genres: game.genres,
                            };
                            return [3 /*break*/, 3];
                        case 2:
                            error_4 = _c.sent();
                            if (((_a = error_4.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                throw new common_1.NotFoundException("Game with ID ".concat(id, " not found"));
                            }
                            else {
                                throw new common_1.HttpException(error_4.message, (_b = error_4.response) === null || _b === void 0 ? void 0 : _b.status);
                            }
                            return [3 /*break*/, 3];
                        case 3: return [4 /*yield*/, this.prisma.review.findMany({
                                where: {
                                    gameId: id,
                                },
                            })];
                        case 4:
                            reviews = _c.sent();
                            return [4 /*yield*/, Promise.all(reviews.map(function (review) { return __awaiter(_this, void 0, void 0, function () {
                                    var createdBy, user;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                createdBy = review.createdBy;
                                                console.log(review);
                                                return [4 /*yield*/, this.prisma.user.findUnique({
                                                        where: { id: createdBy },
                                                        select: {
                                                            id: true,
                                                            username: true,
                                                            email: true,
                                                            image: true,
                                                            role: true,
                                                            gender: true,
                                                            bio: true,
                                                        },
                                                    })];
                                            case 1:
                                                user = _a.sent();
                                                if (!user)
                                                    throw new common_1.NotFoundException("User with ID ".concat(createdBy, " not found"));
                                                return [2 /*return*/, __assign(__assign({}, review), { createdBy: user })];
                                        }
                                    });
                                }); }))];
                        case 5:
                            reviewsWithUserInfo = _c.sent();
                            return [2 /*return*/, {
                                    message: "Successfully found all reviews of game with ID ".concat(id),
                                    reviews: reviewsWithUserInfo,
                                    game: gameInfo,
                                }];
                    }
                });
            });
        };
        ReviewService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var review, gameResponse, game, gameInfo, error_5;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.prisma.review.findUnique({
                                where: { id: id },
                                include: {
                                    user: {
                                        select: {
                                            id: true,
                                            username: true,
                                            email: true,
                                            role: true,
                                            image: true,
                                            gender: true,
                                            bio: true,
                                        },
                                    },
                                },
                            })];
                        case 1:
                            review = _c.sent();
                            if (!review)
                                throw new common_1.BadRequestException("Review with ID ".concat(id, " not found"));
                            _c.label = 2;
                        case 2:
                            _c.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(review.gameId, "?key=").concat(process.env.RAWG_KEY)))];
                        case 3:
                            gameResponse = _c.sent();
                            game = gameResponse.data;
                            gameInfo = {
                                id: game.id,
                                name: game.name,
                                description: game.description,
                                released: game.released,
                                background_image: game.background_image,
                                saturated_color: game.saturated_color,
                                dominant_color: game.dominant_color,
                                genres: game.genres.map(function (genre) { return genre.name; }),
                            };
                            return [2 /*return*/, {
                                    message: 'Review successfully found',
                                    review: __assign(__assign({}, review), { createdBy: review.user, user: undefined, gameId: undefined, game: gameInfo }),
                                }];
                        case 4:
                            error_5 = _c.sent();
                            if (((_a = error_5.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                throw new common_1.NotFoundException("Game with ID ".concat(review.gameId, " not found"));
                            }
                            else {
                                throw new common_1.HttpException(error_5.message, (_b = error_5.response) === null || _b === void 0 ? void 0 : _b.status);
                            }
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ReviewService_1.prototype.update = function (id, updateReviewDto) {
            return __awaiter(this, void 0, void 0, function () {
                var rating, comment, completed, platform, difficulty, gameInfo, existingReview, gameResponse, game, error_6, updatedReview;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            rating = updateReviewDto.rating, comment = updateReviewDto.comment, completed = updateReviewDto.completed, platform = updateReviewDto.platform, difficulty = updateReviewDto.difficulty;
                            return [4 /*yield*/, this.prisma.review.findUnique({
                                    where: { id: id },
                                    include: {
                                        user: {
                                            select: {
                                                id: true,
                                                username: true,
                                                email: true,
                                                role: true,
                                                image: true,
                                                gender: true,
                                                bio: true,
                                            },
                                        },
                                    },
                                })];
                        case 1:
                            existingReview = _c.sent();
                            if (!existingReview)
                                throw new common_1.BadRequestException("Review with ID ".concat(id, " not found"));
                            if (existingReview.createdBy !== this.authUserService.user.id)
                                throw new common_1.ForbiddenException('Only the creator of this review can update it');
                            _c.label = 2;
                        case 2:
                            _c.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.httpService.get("".concat(rawg_url_1.rawg_url, "/games/").concat(existingReview.gameId, "?key=").concat(process.env.RAWG_KEY)))];
                        case 3:
                            gameResponse = _c.sent();
                            game = gameResponse.data;
                            gameInfo = {
                                id: game.id,
                                name: game.name,
                                description: game.description,
                                released: game.released,
                                background_image: game.background_image,
                                saturated_color: game.saturated_color,
                                dominant_color: game.dominant_color,
                                genres: game.genres.map(function (genre) { return genre.name; }),
                            };
                            return [3 /*break*/, 5];
                        case 4:
                            error_6 = _c.sent();
                            if (((_a = error_6.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                throw new common_1.NotFoundException("Game with ID ".concat(existingReview.gameId, " not found"));
                            }
                            else {
                                throw new common_1.HttpException(error_6.message, (_b = error_6.response) === null || _b === void 0 ? void 0 : _b.status);
                            }
                            return [3 /*break*/, 5];
                        case 5: return [4 /*yield*/, this.prisma.review.update({
                                where: { id: id },
                                data: {
                                    rating: rating === undefined ? existingReview.rating : rating,
                                    comment: comment === undefined ? existingReview.comment : comment,
                                    completed: completed === undefined ? existingReview.completed : completed,
                                    platform: platform === undefined ? existingReview.platform : platform,
                                    difficulty: difficulty === undefined ? existingReview.difficulty : difficulty,
                                },
                            })];
                        case 6:
                            updatedReview = _c.sent();
                            return [2 /*return*/, {
                                    message: 'Review successfully updated',
                                    review: __assign(__assign({}, updatedReview), { createdBy: existingReview.user, game: gameInfo, gameId: undefined, user: undefined }),
                                }];
                    }
                });
            });
        };
        ReviewService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var review;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.review.findUnique({
                                where: { id: id },
                                include: {
                                    user: {
                                        select: {
                                            id: true,
                                            username: true,
                                            email: true,
                                            role: true,
                                            image: true,
                                            gender: true,
                                            bio: true,
                                        },
                                    },
                                },
                            })];
                        case 1:
                            review = _a.sent();
                            if (!review)
                                throw new common_1.BadRequestException("Review with ID ".concat(id, " not found"));
                            if (review.createdBy !== this.authUserService.user.id &&
                                this.authUserService.user.role !== role_enum_1.Role.admin)
                                throw new common_1.ForbiddenException('Only the creator of this review or admins can remove it');
                            return [4 /*yield*/, this.prisma.review.delete({
                                    where: { id: id },
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, {
                                    message: 'Review successfully removed',
                                    review: __assign(__assign({}, review), { createdBy: review.user, user: undefined }),
                                }];
                    }
                });
            });
        };
        return ReviewService_1;
    }());
    __setFunctionName(_classThis, "ReviewService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReviewService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReviewService = _classThis;
}();
exports.ReviewService = ReviewService;
