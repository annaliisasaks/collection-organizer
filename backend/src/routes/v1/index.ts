import express from "express";
import authRoute from "./auth.route";
import unitRoute from "./unit.route";

const router = express.Router();

const routes = [
    {
        path: "/auth",
        route: authRoute
    },
    {
        path: "/unit",
        route: unitRoute
    }
]

routes.forEach(r => router.use(r.path, r.route))

export default router;