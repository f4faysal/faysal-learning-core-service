"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const user_contants_1 = require("./user.contants");
const getAllFromDB = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { search } = filters, filterData = __rest(filters, ["search"]);
    const andConditions = [];
    // if (search) {
    //   andConditions.push({
    //     OR: userSearchableFields.map(field => ({
    //       [field]: {
    //         contains: search,
    //         mode: 'insensitive',
    //       },
    //     })),
    //   });
    // }
    if (search) {
        andConditions.push({
            OR: user_contants_1.userSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.default.user.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : {
                createdAt: 'desc',
            },
    });
    const total = yield prisma_1.default.user.count({
        where: whereConditions,
    });
    return {
        meta: {
            total,
            page,
            limit,
            totalPage: Math.ceil(total / limit),
        },
        data: result,
    };
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({ where: { id } });
    return result;
});
const updateIntoDB = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {};
    if (payload.name) {
        data['name'] = payload.name;
    }
    if (payload.address) {
        data['address'] = payload.address;
    }
    if (payload.contactNumber) {
        data['contactNumber'] = payload.contactNumber;
    }
    if (payload.profileImg) {
        data['profileImg'] = payload.profileImg;
    }
    console.log(payload);
    const result = yield prisma_1.default.user.update({ where: { id: userId }, data });
    return result;
});
const deleteFromDB = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    if ((isAdminExist === null || isAdminExist === void 0 ? void 0 : isAdminExist.role) === client_1.Role.admin) {
        const isUserExist = yield prisma_1.default.user.findUnique({ where: { id } });
        if ((isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.role) === client_1.Role.user) {
            const result = yield prisma_1.default.user.delete({ where: { id } });
            return result;
        }
        else {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized for delete this user');
        }
    }
    else if ((isAdminExist === null || isAdminExist === void 0 ? void 0 : isAdminExist.role) === client_1.Role.super_admin) {
        const isUserExist = yield prisma_1.default.user.findUnique({ where: { id } });
        if ((isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.role) === client_1.Role.user || (isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.role) === client_1.Role.admin) {
            const result = yield prisma_1.default.user.delete({ where: { id } });
            return result;
        }
        else {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized for delete this user');
        }
    }
    throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized for delete this user');
});
const getProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await prisma.user.findUnique({ where: { email } });
    const result = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    return result;
});
const updateAdminRoles = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.update({ where: { id }, data: payload });
    return result;
});
exports.UserService = {
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    getProfile,
    updateAdminRoles,
};
