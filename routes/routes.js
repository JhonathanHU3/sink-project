// Imports
import { Router } from "express";
import { registerUser, loginUser } from "../controller/UserManager.js";
import { submitPost, showAllPosts } from "../controller/postController.js";

const routes = Router();

// Routes for user registration and login
routes.post("/register", registerUser);
routes.post("/login", loginUser);


routes.get('/posts', showAllPosts);
routes.post('/posts', submitPost)


export { routes };
