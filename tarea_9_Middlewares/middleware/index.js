import "dotenv/config";
import fs from "fs";
export const logsPreview = (req, res, next) => {
    if (!req || !res || !next) return;
    // console.log("Succes!");
    const { method, url } = req;
    const log = ` Metodo ${method} - URL: ${url} FECHA: ${new Date()} BODY: ${JSON.stringify(
        req.body
    )} `;
    fs.appendFileSync("logs.txt", log + "\n");

    next();
};

export const validateBodyStudents = (req, res, next) => {
    const { name, age, major } = req.body;
    if (!name || !age || !major) {
        return res.status(400).json({ mesage: "faltan datos" });
    }
    if (name !== null || age >= 0 || major !== null) {
        return res.status(403).json({
            mesage: "Invalid name. Name must be a non-empty string. or Invalid age. Age must be a non-negative number.",
        });
    }
    next();
};

export const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    const token = process.env.AUTH_TOKEN;
    if (authorization !== token)
        return res
            .status(401)
            .json({ message: "No tiene autorizacion para acceder" });
    console.log(authorization);
    next();
};
