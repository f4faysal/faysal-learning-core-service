"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/auth/user.routes");
const blog_toute_1 = require("../modules/blog/blog.toute");
const bookings_routes_1 = require("../modules/bookings/bookings.routes");
const category_routes_1 = require("../modules/category/category.routes");
const faqs_toute_1 = require("../modules/faqs/faqs.toute");
const feedback_toute_1 = require("../modules/feedback/feedback.toute");
const reviewAndRating_routes_1 = require("../modules/reviewAndRating/reviewAndRating.routes");
const services_routes_1 = require("../modules/services/services.routes");
const user_routes_2 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        routes: user_routes_1.AuthRouter,
    },
    {
        path: '/',
        routes: user_routes_2.UserRouter,
    },
    {
        path: '/services',
        routes: services_routes_1.ServicesRouter,
    },
    {
        path: '/bookings',
        routes: bookings_routes_1.BookingsRouter,
    },
    {
        path: '/categorie',
        routes: category_routes_1.CategoryRoutes,
    },
    {
        path: '/review',
        routes: reviewAndRating_routes_1.ReviewAndRatingRoutes,
    },
    {
        path: '/blogs',
        routes: blog_toute_1.BlogRoutes,
    },
    {
        path: '/faqs',
        routes: faqs_toute_1.FaqsRoutes,
    },
    {
        path: '/feedback',
        routes: feedback_toute_1.FeedbackRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
