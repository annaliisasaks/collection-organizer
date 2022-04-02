import express from "express";
import authRoute from "./auth.route";

const router = express.Router();

const routes = [
    {
        path: "/auth",
        route: authRoute
    },
]

routes.forEach(r => router.use(r.path, r.route))

export default router;