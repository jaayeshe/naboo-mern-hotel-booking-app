import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

//anything auth related that we need middleware for is in this file

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  //firstly get the auth token from the cookie that we'll send to us in
  //the request

  const token = req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  //if we have a token next we'll
  //verify that the token is good by using the jwt secret key we defined
  //in our env file

  try {
    //we'll try to decode the token here

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    //get the user id from the decoded token
    req.userId = (decoded as JwtPayload).userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
};
export default verifyToken;
