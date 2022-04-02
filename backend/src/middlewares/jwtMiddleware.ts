import "dotenv/config";
import jwt from "jsonwebtoken";

function authenticateAccessToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        res.json({ message: 'Invalid access token. No 🔥 for you'});
    }
	else {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(401);
                res.json({ message: 'Invalid access token. No 🔥 for you' });
            }
            else {
                next();
            }
        });
    }
}

export default authenticateAccessToken;