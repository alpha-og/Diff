import mongoose from "mongoose";
import bcryptjs from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const fileSchema = new mongoose.Schema({
	name: { type: String, required: false },
	data: { type: Buffer, required: false },
	contentType: { type: String, required: false },
});

const userSchema = new mongoose.Schema({
	username: { type: String, required: false },
	name: { type: String, required: false },
	password: { type: String, required: false, select: false },
	yearOfStudy: { type: Number, required: false },
	techStacks: { type: Array, required: false },
	projects: { type: Array, required: false },
	joinedAt: { type: Date, default: Date.now },

	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	sessions: [], // currently only a single session is supported, but this should be updated for multi-session logins
	qualifications: {
		resume: fileSchema,
		cv: fileSchema,
		portfolio: { type: String, required: false },
	},
	contact: {
		linkedin: { type: String, required: false },
		github: { type: String, required: false },
		phone: { type: String, required: false },
		email: { type: String, required: false },
	},
});

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	this.password = await bcryptjs.hash(this.password, 10);
	next();
});
userSchema.methods.compare = async function (password) {
	return await bcryptjs.compare(password, this.password);
};
userSchema.methods.getAccessToken = function () {
	const sessionId = uuidv4();
	const refreshToken = this.getRefreshToken(sessionId);
	this.sessions.push(refreshToken);
	return jwt.sign({ userId: this._id, sessionId }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRY,
	});
};

userSchema.methods.getRefreshToken = function (sessionId) {
	return jwt.sign(
		{ userId: this._id, sessionId },
		process.env.JWT_REFRESH_SECRET,
		{
			expiresIn: process.env.JWT_REFRESH_EXPIRY,
		},
	);
};

userSchema.methods.refreshAccessToken = function (sessionId) {
	const session = this.sessions.filter((session) => {
		const decodedJwt = jwt.verify(session, process.env.JWT_REFRESH_SECRET);
		if (!decodedJwt) return false;
		return decodedJwt.sessionId === sessionId;
	})[0];

	if (!session) return null;
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRY,
	});
};
export default mongoose.model("users", userSchema);
