import jwt from "jsonwebtoken";
import express, { NextFunction } from "express";
import config from "config";

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {
  const signingKey = Buffer.from(
    config.get<string>(keyName),
    "base64"
  ).toString("ascii");
  
  var token = jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
  return token
}

export function verifyJwt<T>(
  token: string,
  keyName: "accessTokenPublicKey" 
): T | null {
  const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
    "ascii"
  );

  try {
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (e) {
    return null;
  }
}


// const verifyToken = (req:Request, res:Response, next:NextFunction) => {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//       if (err) res.json("Token is not valid!");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
// };
