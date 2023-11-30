// Imports
import { Router } from "express";
import { registerUser, loginUser } from "../controller/UserManager.js";
import { submitPost, showAllPosts, showPostsByClassId } from "../controller/postController.js";

const routes = Router();

// Routes for user registration and login
routes.post("/register", registerUser);
routes.post("/login", loginUser);

// Routes for 
routes.get('/posts', showAllPosts);
routes.post('/posts', submitPost);
routes.get('/posts/:classId', showPostsByClassId);



export { routes };
