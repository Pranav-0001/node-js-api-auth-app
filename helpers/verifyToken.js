import jsonwebtoken from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(403)
        .json({ status: false, message: "No token provided" });
    }
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log({ error });
    res
      .status(403)
      .json({ status: false, message: "Error while parsing token" });
  }
}
