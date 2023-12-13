import { Router } from "express";
import { submitComment, showCommentsByPostId } from "../controller/commentsController.js";
import * as UserManager from "../controller/UserManager.js";
import * as PagesController from "../controller/PagesController.js";
import {
  submitPost,
  showAllPosts,
  showPostsByClassId,
} from "../controller/postController.js";
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

// Routes to Create, Get, and Get by Course ID Forum Posts
// Modify these routes for pagination
routes.get("/posts", showAllPosts);
routes.post("/posts", submitPost);
routes.get("/posts/:courseId", showPostsByClassId);

// Routes for comments
routes.get('/posts/open/:postId', showCommentsByPostId);
routes.post('/posts/:postId/comments', submitComment);

// Home page route with token verification
routes.get("/home", verifyToken, PagesController.renderHomePage);

// Route to access any user page
routes.get("/user/:username", verifyToken, PagesController.renderUserPage);
// Route to update user data
routes.put("/user/:username", verifyToken, UserManager.updateUser);

// Route to access any course page
routes.get("/courses/:id", verifyToken, PagesController.renderCoursePage);

// Route to access any videopage
routes.get("/video/:id", verifyToken, PagesController.renderVideoPage);

// Route to add more xp to a user
routes.post("/addUserXp", verifyToken, UserManager.addXpToUser);





export { routes };