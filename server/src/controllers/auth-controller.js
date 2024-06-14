import User from "../models/user-model.js";
import { setAccessToken, clearAccessToken } from "../utils/token-handler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
	const user = new User(req.body);
	const usersave = await user.save();
	res.status(201).json(usersave);
	try {
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const signIn = async (req, res) => {
	const { email, password } = req.body;
	const existingUser = await User.findOne({ "contact.email": email }).select(
		"+password",
	);
	if (!existingUser) {
		return res.status(404).json({ message: "User not found" });
	}
	const isMatch = await existingUser.compare(password);
	if (!isMatch) {
		return res.status(401).json({ message: "Invalid Credentials" });
	}
	setAccessToken(existingUser, 200, res);
};

const signOut = async (req, res) => {
	res.clearCookie("access-token").status(200).json({ message: "Signed out" });
};

export { createUser, signIn, signOut };
