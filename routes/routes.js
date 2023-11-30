// Imports
import { Router } from "express";
import * as UserManager from "../controller/UserManager.js";
import * as PagesController from "../controller/PagesController.js"
import { verifyToken } from "../controller/TokenController.js";
import cookieParser from "cookie-parser";

const routes = Router();
routes.use(cookieParser());

// Routes to render static pages
routes.get("/", PagesController.renderIndex)
routes.get("/register", PagesController.renderRegisterPage)
routes.get("/login", PagesController.renderLoginPage)

// Routes for user registration and login
routes.post("/register", UserManager.registerUser);
routes.post("/login", UserManager.loginUser);

// Home page route with token verification
routes.get("/home", verifyToken, PagesController.renderHomePage)

// Route to access any user page
routes.get("/user/:id", PagesController.renderUserPage)

export { routes };

