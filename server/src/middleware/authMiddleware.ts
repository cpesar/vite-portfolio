import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// interface for the request with user field
interface AuthRequest extends Request {
  user?: any;
}

export const adminAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // get the token from the header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // verify token
    const secret = process.env.JWT_SECRET || "";
    const decoded: any = jwt.verify(token, secret);

    if (!decoded.isAdmin) {
      return res
        .status(401)
        .json({ message: "Access denied. Admin privledges required" });
    }
    // add user from payload to request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
