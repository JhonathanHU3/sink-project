// Imports
import { Router } from "express";
import { registerUser, loginUser } from "../controller/UserManager.js";

const routes = Router();

// Routes for user registration and login
routes.post("/register", registerUser);
routes.post("/login", loginUser);

export { routes };
