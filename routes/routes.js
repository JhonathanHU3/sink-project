// Imports
import { Router } from "express";
import * as UserManager from "../controller/UserManager.js";
import * as PagesController from "../controller/PagesController.js";
import { submitPost, showAllPosts, showPostsByClassId } from "../controller/postController.js";
import { verifyToken } from "../controller/TokenController.js";
import cookieParser from "cookie-parser";

const routes = Router();
routes.use(cookieParser());

// Routes to render static pages
routes.get("/", PagesController.renderIndex);
routes.get("/register", PagesController.renderRegisterPage);
routes.get("/login", PagesController.renderLoginPage);

// Routes for user registration and login
routes.post("/register", UserManager.registerUser);
routes.post("/login", UserManager.loginUser);

// Routes for Create ,Get and GetById
routes.get('/posts', showAllPosts);
routes.post('/posts', submitPost);
routes.get('/posts/:classId', showPostsByClassId);

// Home page route with token verification
routes.get("/home", verifyToken, PagesController.renderHomePage);

// Route to access any user page
routes.get("/user/:username", verifyToken, PagesController.renderUserPage);
// Route to update user data
routes.put("/user/:username", verifyToken, UserManager.updateUser)

export { routes };
