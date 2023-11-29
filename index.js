// Necessary imports
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "./routes/routes.js";

const app = express();

// Configuring port to use on local server
const port = 3000;

// Configuration to use __dirname in ES6+
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setting the configuration for correct server operation
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

/* Rendering static pages */
// Function to render the index page
app.get("/index", (req, res) => {
  return res.render("index");
});

// Function to render the register page
app.get("/login", (req, res) => {
  return res.render("login");
});

//Function to render the login page
app.get("/register", (req, res) => {
  return res.render("register");
});

// Starting the server on the locally defined port or the server defined port
app.listen(
  {
    host: "0.0.0.0",
    port: process.env.PORT ?? port,
  },
  () => console.log(`Server open on port ${port}`)
);
