import jwt from "jsonwebtoken";
import "dotenv/config";

// secret key to configure a JWT sign
let { SECRET } = process.env;

async function tokenGeneration(userId, username, profileImageDir) {
  return await jwt.sign({ userId, username, profileImageDir}, SECRET, { expiresIn: "1h" });
}

// checking the jwt "token" to give the user access
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, SECRET );
    req.user = user;

    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/login");
  }
};

export { tokenGeneration, verifyToken };