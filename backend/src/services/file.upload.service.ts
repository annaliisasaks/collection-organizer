import { v4 as uuidv4 } from "uuid";
import { IImage, IUnit } from "../models/db/unit.model";
import { TypedRequestBody } from "../models/requests/types";
import { uploadFileToS3 } from "./s3.service";

const uploadFilesFromRequest = async (req: TypedRequestBody<IUnit>) => {
    const uploadedFiles: IImage[] = [];
    if (req.files && req.files?.length) {
        for (const [index, file] of req.files.entries()) {
            try {
                const fname = `${uuidv4()}-${file.originalname}`;
                const fileUploadResponse = await uploadFileToS3(fname, file.buffer);
                const fUploadedFileUrl = fileUploadResponse.Location;
                uploadedFiles.push(
                    { 
                        imageName: fname, 
                        imageUrl: fUploadedFileUrl, 
                        isCoverImage: req.files.length === 1 ? true : index == req.body?.coverImageIndex 
                    }
                )
            }
            catch (e) {
                console.error("File upload failed", e)
            }
        }
    }
    return uploadedFiles
}

export { uploadFilesFromRequest }