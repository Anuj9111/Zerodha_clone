import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config();

const createSecretToken = (id) => {
    const secret = process.env.JWT_SECRET || process.env.TOKEN_KEY || "mySuperSecretJWTKey123456";
    return jwt.sign(
        { id },
        secret,
        {
            expiresIn: 3 * 24 * 60 * 60, 
        }
    );
};

export default createSecretToken;