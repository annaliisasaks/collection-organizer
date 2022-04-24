import { Response, Request } from "express";
import { TypedRequestBody, TypedRequestParams } from '../models/requests/types';
import Unit, { IImage, IUnit } from "../models/db/unit.model";
import { deleteFileFromS3 } from "../services/s3.service"
import { sendResourceCreatedResponse, send400Response, sendResourceFoundResponse, sendGetFailedResponse, sendResourceNotFoundResponse, sendResourceDeletedResponse } from "../models/repsponse/response";
import { uploadFilesFromRequest } from "../services/file.upload.service";

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
    const uploadedFiles = await uploadFilesFromRequest(req);

    const unit = new Unit({ ...req.body, images: uploadedFiles });
    unit.save()
        .then((createdUnit) => {
            sendResourceCreatedResponse(res, createdUnit);
        })
        .catch((error) => {
            send400Response(res, error);
        });
}

const editUnit = async (req: TypedRequestBody<IUnit>, res: Response) => {
    const uploadedFiles = await uploadFilesFromRequest(req);

    Unit.findByIdAndUpdate(req.params.id, { ...req.body, ...(req.files && req.files?.length && {images: uploadedFiles})})
        .then((original) => {
            if (req.files && req.files?.length) {
                original.images.forEach(i => deleteFileFromS3(i.imageName))
            }
            Unit.findById(req.params.id)
                .then((unit) => sendResourceFoundResponse(res, unit))
                .catch(() => sendResourceNotFoundResponse(res))
        })
        .catch((error) => {
            send400Response(res, error);
        })
}

const deleteById = (req: TypedRequestParams, res: Response) => {
    const { id } = req.params;
    Unit.findByIdAndDelete(id)
        .then((deletedResource) => {
            deletedResource.images.forEach(i => deleteFileFromS3(i.imageName))
            sendResourceDeletedResponse(res);
        })
        .catch((error) => {
            send400Response(res, error);
        })
}

const getAllImages = (req: Request, res: Response) => {
    Unit.find()
        .then((units: IUnit[]) => {
            const allImages = units.flatMap(u => u.images)
            sendResourceFoundResponse(res, allImages);
        })
        .catch(() => sendResourceNotFoundResponse(res))
}

export { addUnit, getAll, getById, deleteById, editUnit, getAllImages };
