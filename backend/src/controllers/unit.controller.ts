import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { TypedRequestBody, TypedRequestParams } from '../models/requests/types';
import Unit, { IUnit } from "../models/db/unit.model";
import { uploadFileToS3 } from "../services/s3.service"
import { sendResourceCreatedResponse, send400Response, sendResourceFoundResponse, sendGetFailedResponse, sendResourceNotFoundResponse } from "../models/repsponse/response";

const getById = (req: TypedRequestParams, res: Response) => {
    const { id } = req.params;
    Unit.findById(id)
        .then((unit) => sendResourceFoundResponse(res, unit))
        .catch(() => sendResourceNotFoundResponse(res))
}

const getAll = (req: Request, res: Response) => {
    Unit.find()
        .then((units) => sendResourceFoundResponse(res, units))
        .catch((error) => sendGetFailedResponse(res, error));
}

const addUnit = async (req: TypedRequestBody<IUnit>, res: Response) => {
    let uploadedFileUrl;
    let fileName;
    if (req.file) {
        const file = req.file;
        try {
            fileName = `${uuidv4()}-${file.originalname}`;
            const fileUploadResponse = await uploadFileToS3(fileName, file.buffer);
            uploadedFileUrl = fileUploadResponse.Location;
        } catch (e) {
            console.error("File upload failed", e)
        }
    }
    const unit = new Unit({ ...req.body, imageUrl: uploadedFileUrl, imageName: fileName });
    unit.save()
        .then((createdUnit) => {
            sendResourceCreatedResponse(res, createdUnit);
        })
        .catch((error) => {
            send400Response(res, error);
        });
}

export { addUnit, getAll, getById };
