import User from "../model/UserModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const userVerification = (req, res) => {
    const token =
        req.cookies?.token ||
        (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")
            ? req.headers.authorization.split(" ")[1]
            : null);

    if (!token) {
        return res.json({ status: false });
    }

    const secret = process.env.JWT_SECRET || process.env.TOKEN_KEY || "mySuperSecretJWTKey123456";

    jwt.verify(token, secret, async (err, data) => {
        if (err) {
            return res.json({ status: false });
        } else {
            try {
                const user = await User.findById(data.id);
                if (user) return res.json({ status: true, user: user.username });
                else return res.json({ status: false });
            } catch (e) {
                return res.json({ status: false });
            }
        }
    });
};