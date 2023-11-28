// Imports
import { randomUUID } from "node:crypto";
import { tokenGeneration } from "./TokenController.js";
import bcrypt from "bcrypt";
import { registerUserInDb, getUserInDb } from "../models/User.js";


// Function to obtain user data and generate a unique ID, random profile photo and then save it to the database
const registerUser = async (req, res) => {
  const userId = randomUUID();
  const profilePhotoDir = `/img/profileImg/${Math.ceil(Math.random() * 10)}.jpg`;
  const fullName = req.body.fullName;
  const userEmail = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    await registerUserInDb(userId, fullName, userId, userEmail, profilePhotoDir, hashedPassword);
    return res.redirect("/login")
  } catch(err) {
    console.log(err)
    res.status(500).send();
  }
};

const loginUser = async (req, res) => {
  const userEmail = req.body.userEmail
  const userPassword = req.body.userEmail

  let user = await getUserInDb(userEmail)
  if(user.length === 1) {
    const passwordCheck = await bcrypt.compare(req.body.password, user.password);
    
    if(passwordCheck) {
      const token = tokenGeneration(user.id);
      res.cookie("token", token, {
        httpOnly: true,
      });
      user = {id: user.id, fullName: user.fullName, email: user.email, profilePhotoDir: user.profilePhotoDir};
      res.cookie("user", JSON.stringify(user), {
        httpOnly: true,
      })
      return res.redirect("/home");
    }
  }
};

export { registerUser, loginUser };
