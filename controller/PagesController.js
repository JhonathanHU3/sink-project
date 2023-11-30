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

export const renderHomePage = (req, res) => {
  const {userId, username, profileImageDir} = req.user;
  return res.render("home", {username, profileImageDir})
}

