import { Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET;

export const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const generateTokenAndSetCookie = (res: Response, userId: string) => {
  if (!secret) {
    return console.log("no token provided");
  }

  const token = jwt.sign({ userId }, secret, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
