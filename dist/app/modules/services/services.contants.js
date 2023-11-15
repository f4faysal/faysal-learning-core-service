"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyRelationalFieldsMapper = exports.facultyRelationalFields = exports.serviceSearchableFields = exports.serviceFilterableFields = void 0;
exports.serviceFilterableFields = ['search', 'categoryId'];
exports.serviceSearchableFields = ['title', 'price', 'description'];
exports.facultyRelationalFields = ['categoryId'];
exports.facultyRelationalFieldsMapper = {
    categoryId: 'category',
};
