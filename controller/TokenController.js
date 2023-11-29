import jwt from "jsonwebtoken";
import "dotenv/config";

let { SECRET } = process.env;

async function tokenGeneration(userId) {
  return await jwt.sign({ data: userId }, SECRET, { expiresIn: "1h" });
}

const verifyToken = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/");
  }
};

export { tokenGeneration, verifyToken };