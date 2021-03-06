import { Response } from "express";

export const sendResourceFoundResponse = (res: Response, data: any | any[]) => {
    res.status(200);
    res.send(data);
}

export const sendResourceCreatedResponse = (res: Response, data: any) => {
    res.status(201);
    res.send(data);
}

export const send400Response = (res: Response, error: any) => {
    res.status(400);
    res.send({error});
}

export const sendResourceNotFoundResponse = (res: Response) => {
    res.sendStatus(404);
}

export const sendResourceDeletedResponse = (res: Response) => {
    res.sendStatus(204);
}