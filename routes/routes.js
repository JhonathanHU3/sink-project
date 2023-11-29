// Imports
import { Router } from "express";
import { registerUser, loginUser } from "../controller/UserManager.js";
import { verifyToken } from "../controller/TokenController.js";
import cookieParser from "cookie-parser";

const routes = Router();
routes.use(cookieParser());

// Routes for user registration and login
routes.post("/register", registerUser);
routes.post("/login", loginUser);

// Home page route with token verification
routes.get("/home", verifyToken, (req, res) => {
    res.render("home");
})

export { routes };

