import jwt from "jsonwebtoken";

const setAccessToken = async (user, statusCode, res) => {
	const accessToken = user.getAccessToken();

	const cookieOptions = {
		expire: new Date(
			Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000,
		),
		httpOnly: true,
	};

	await user.save();
	res
		.status(statusCode)
		.cookie("accessToken", accessToken, cookieOptions)
		.json({ message: "Signed in successfully" });
};

const clearAccessToken = async (user, req, res) => {
	user.sessions = user.sessions.filter((session) => {
		const decodedJwt = jwt.decode(session);
		return (
			decodedJwt.sessionId !==
			jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET).sessionId
		);
	});
	await user.save();

	res
		.status(200)
		.clearCookie("accessToken")
		.json({ message: "Signed out successfully" });
};

export { setAccessToken, clearAccessToken };
