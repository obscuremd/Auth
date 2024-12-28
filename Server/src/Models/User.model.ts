import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    last_login: { type: Date, default: Date.now },
    is_verified: { type: Boolean, default: false },

    reset_password_token: String,
    reset_password_expires_at: Date,
    verification_token: String,
    verification_token_expires_at: Date,
  },
  { timestamps: true }
);

const User = models.UserData || mongoose.model("UserData", userSchema);
export default User;
