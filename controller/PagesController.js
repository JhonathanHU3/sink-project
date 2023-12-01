import * as User from "../models/User.js";

// Function to render the static index page
export const renderIndex = (req, res) => {
  return res.render("index");
};

// Function to render the static register page
export const renderLoginPage = (req, res) => {
  return res.render("login");
};

// Function to render the static login page
export const renderRegisterPage = (req, res) => {
  return res.render("register");
};

// Function to render homepage
export const renderHomePage = (req, res) => {
  const user = req.user;
  console.log(user);
  return res.render("home", { user });
};

// Rendering userpage with user credentials
export const renderUserPage = async (req, res) => {
  const loggedInUser = req.user.userId;
  const [user] = await User.getUserInDb(req.params.id, "id");

  if (user) {
    if (loggedInUser === user.id) {
      const canEdit = true;
      
      return res.render("profile", { user, canEdit });
    }

    const canEdit = false;
    return res.render("profile", { user, canEdit });
  } else {
    console.log("Erro: usuário não encontrado");
    return res.redirect("/home");
  }
};
