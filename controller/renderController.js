/* Functions that render static pages */

// Function to render the index page
const renderIndexPage = (req, res) => {
  return res.render("index");
};

// Funcion to render the register page
const renderRegisterPage = (req, res) => {
  return res.render("login");
};

//Function to render the login page
const renderLoginPage = (req, res) => {
  return res.render("register");
};

export { renderIndexPage, renderRegisterPage, renderLoginPage };
