import express from "express";
import multer from "multer";
import { validationResult, body } from "express-validator";
import { unitController } from "../../controllers";
import authenticateAccessToken from "../../middlewares/jwtMiddleware";

const createAddUnitValidation = () => {
    return [
        body('name').notEmpty(),
    ]
}

const router = express.Router();

// Get all units
router.get("/", authenticateAccessToken, unitController.getAll);

// Get by id
router.get("/:id", authenticateAccessToken, unitController.getById);

// Create a unit
router.post("/", multer().single("file"), authenticateAccessToken, [...createAddUnitValidation()], (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(422).json({
            errors: validationErrors.array()
        })
    }
    unitController.addUnit(req, res)
});

export default router;