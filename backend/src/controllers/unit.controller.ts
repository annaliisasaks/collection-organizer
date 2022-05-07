import { Response } from "express";
import { PaginateResult } from "mongoose";
import { TypedRequestBody, TypedRequestParams } from '../models/requests/types';
import Unit, { IUnit } from "../models/db/unit.model";
import { deleteFileFromS3 } from "../services/s3.service"
import { sendResourceCreatedResponse, send400Response, sendResourceFoundResponse, sendResourceNotFoundResponse, sendResourceDeletedResponse } from "../models/repsponse/response";
import { uploadFilesFromRequest } from "../services/file.upload.service";

const getById = (req: TypedRequestParams, res: Response) => {
    const { id } = req.params;
    Unit.findById(id)
        .then((unit) => sendResourceFoundResponse(res, unit))
        .catch(() => sendResourceNotFoundResponse(res))
}

const getAll = (req: TypedRequestParams, res: Response) => {
    const query = {}
    if (req.query.property && req.query.value) {
        query[req.query.property] = { $regex: new RegExp(req.query.value), $options: "i" }
    }
    const options = {
        page: req.query.page || 1,
        limit: 12
    }
    Unit.paginate(query, options)
        .then((paginatedUnits: PaginateResult<IUnit>) => {
            sendResourceFoundResponse(res, paginatedUnits)
        })
        .catch(() => sendResourceNotFoundResponse(res))
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

const getAllImages = (req: TypedRequestParams, res: Response) => {
    const options = {
        page: req.query.page || 1,
        limit: 12
    }
    Unit.paginate({}, options)
        .then((pagiantedImages: PaginateResult<IUnit>) => {
            const mappedPagiantedImages = {...pagiantedImages, docs: pagiantedImages.docs.map(u => ({images: u.images, _id: u._id, name: u.name}))};
            sendResourceFoundResponse(res, mappedPagiantedImages)
        })
        .catch(() => sendResourceNotFoundResponse(res))
}

export { addUnit, getAll, getById, deleteById, editUnit, getAllImages };
