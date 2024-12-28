import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../Models/User.model";
import { generateCode, generateTokenAndSetCookie } from "../Utils/generateCode";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("all fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verification_token = generateCode();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verification_token,
      verification_token_expires_at: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  res.send("login");
};

export const logout = async (req: Request, res: Response) => {
  res.send("logout");
};
