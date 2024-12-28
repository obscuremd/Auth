import { Router } from "express";
import { login, logout, signup } from "../Helpers/auth.controller";
import User from "../Models/User.model";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
