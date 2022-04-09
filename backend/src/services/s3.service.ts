import "dotenv/config";
import AWS from "aws-sdk";

const BUCKET_NAME = process.env.S3_BUCKET_NAME;

const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ID,
    secretAccessKey: process.env.S3_SECRET
})

export function uploadFileToS3(fileName: string, fileContent: Buffer): Promise<AWS.S3.ManagedUpload.SendData> {
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent
    };

    return s3.upload(params).promise()
}

export function deleteFileFromS3(fileName: string): Promise<AWS.S3.Types.DeleteObjectOutput> {
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
    };

    return s3.deleteObject(params).promise()
}
