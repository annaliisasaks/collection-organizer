import "dotenv/config";
import { Response } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";

import User from "../models/db/user.model";
import { TypedRequestBody } from '../models/requests/types';

const googleClient = new OAuth2Client({
    clientId: process.env.OAUTH_CLIENT_ID
});

function generateAccessToken(payload){
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '60m'});
}

const authenticate = async (req: TypedRequestBody<{ token: string }>, res: Response) => {
    const { token } = req.body;

    const ticket = await googleClient.verifyIdToken({
        idToken: token
    });

    const payload = ticket.getPayload();

    if (payload?.email !== process.env.LOGIN_EMAIL_WHITELIST) {
        res.status(403);
        res.json({ error: "🚫🚫🚫Your account is not whitelisted. No 🔥 for you🚫🚫🚫" })
        return
    }

    let user = await User.findOne({ email: payload?.email });
    if (!user) {
        user = await new User({
            email: payload?.email,
            avatar: payload?.picture,
            name: payload?.name,
        });

        await user.save();
    }
    let newJwt;
    try {
        newJwt = await generateAccessToken({ email: user.email });
    } catch (e) {
        res.sendStatus(500);
        return;
    }

    res.json({ user, token, newJwt });
}


export {authenticate}