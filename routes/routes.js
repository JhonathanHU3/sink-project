// Imports
import { Router } from "express";
import { registerUser, loginUser } from "../controller/UserManager.js";
import { submitPost, showAllPosts, showPostsByClassId } from "../controller/postController.js";
import { verifyToken } from "../controller/TokenController.js";
import cookieParser from "cookie-parser";

const routes = Router();
routes.use(cookieParser());

// Routes for user registration and login
routes.post("/register", registerUser);
routes.post("/login", loginUser);

// Routes for Create ,Get and GetById
routes.get('/posts', showAllPosts);
routes.post('/posts', submitPost);
routes.get('/posts/:classId', showPostsByClassId);


// Home page route with token verification
routes.get("/home", verifyToken, (req, res) => {
    res.render("home");
})

export { routes };
