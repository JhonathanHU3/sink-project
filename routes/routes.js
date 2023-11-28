// Imports
import { Router } from "express";
import { registerUser, loginUser } from "../controller/UserManager.js";
import { verifyToken } from "../controller/TokenController.js";

const routes = Router();

// Routes for user registration and login
routes.post("/register", registerUser);
routes.post("/login", loginUser);

// Home page route with token verification
routes.get("/home", verifyToken)

export { routes };

