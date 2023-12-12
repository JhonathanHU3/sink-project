import * as User from "../models/User.js";
import * as Courses from "../models/Courses.js";

// Function to render the static index page
export const renderIndex = (req, res) => {
  return res.render("index");
};

// Function to render the static index page
export const rederCoursePage = (req, res) => {
  return res.render("courses");
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
export const renderHomePage = async (req, res) => {
  const user = req.user;
  const courses = await Courses.getAllCoursesInDb();
  return res.render("home", { user, courses });
};

// Rendering userpage with user credentials
export const renderUserPage = async (req, res) => {
  const loggedInUserId = req.user.userId;

  // getting user data in database
  const [user] = await User.getUserInDb(req.params.username, "username");
  if (user) {
    // checking if the user has permission to edit the profile visited
    if (loggedInUserId === user.id) {
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

// Rendering courses pages with all disponibility modules
export const renderCoursePage = async (req, res) => {
  const courseData = await Courses.getCourseData(req.params.id);
  const user = req.user;

  return res.render("course", { courseData, user });
};

// Rendering video page of any course
export const renderVideoPage = async (req, res) => {
  const videoId = req.params.id;

  const videoData = await Courses.getVideoData(videoId);
  const user = req.user;
  const videoLink = await Courses.getVideoSignedUrl(videoId);

  return res.render("video", { user, videoData, videoLink });
};
