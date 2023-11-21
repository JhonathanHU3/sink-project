// Imports
import { Router } from "express";
import {
  renderIndexPage,
  renderRegisterPage,
  renderLoginPage,
} from "../controller/renderController";

const routes = Router();

/* ROUTES */
// Routes for rendering static pages
routes.get("/", renderIndexPage);
routes.get("/register", renderRegisterPage);
routes.get("/login", renderLoginPage);

// Routes for user registration and login
routes.post("/newuser", registerUser);
routes.post("/login", loginUser)

export { routes };
