// Necessary imports
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "./routes/routes.js";
import methodOverride  from "method-override";

const app = express();

// Configuring port to use on local server
const port = 3000;

// Configuration to use __dirname in ES6+
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setting the configuration for correct server operation
app.use(methodOverride('_method'))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

// Starting the server on the locally defined port or the server defined port
app.listen(
  {
    host: "0.0.0.0",
    port: process.env.PORT ?? port,
  },
  () => console.log(`Server open on port ${port}`)
);
