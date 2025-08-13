import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: {type: String, required: false},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    otp: String,
    otpExpires: Date,
    isVerified: {type:Boolean, default: false},
    refreshtokens: [
        {
            token: {type: String, required: true},
            expiresAt: {type: String, required: true},
        },
    ]
}, {
    timestamps: true,
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
