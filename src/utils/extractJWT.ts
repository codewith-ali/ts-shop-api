import { Request, Response, NextFunction } from 'express';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    let jwt = req.headers.authorization;

    if (!jwt) {
      return res.status(401).json({ message: 'Invalid token ' });
    }
    
    if (jwt.toLowerCase().startsWith('bearer')) {
      jwt = jwt.slice('bearer'.length).trim();
    }
    next();
};

export default extractJWT;
