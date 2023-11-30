// Imports
import { randomUUID } from "node:crypto";
import { tokenGeneration } from "./TokenController.js";
import bcrypt from "bcrypt";
import { registerUserInDb, getUserInDb } from "../models/User.js";


// Function to obtain user data and generate a unique ID, random profile photo and then save it to the database
const registerUser = async (req, res) => {
  const userId = randomUUID();
  const profilePhotoDir = `/img/profileImg/${Math.ceil(Math.random() * 10)}.jpg`;
  const fullName = req.body.fullname;
  const username = req.body.username;
  const userEmail = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    await registerUserInDb(userId, fullName, username, userEmail, profilePhotoDir, hashedPassword);
    return res.redirect("/login")
  } catch(err) {
    console.log(err)
    res.status(500).send();
  }
};

const loginUser = async (req, res) => {
  const userEmail = req.body.email
  const userPassword = req.body.password

  let [user] = await getUserInDb(userEmail)
  if(user) {
    const passwordCheck = await bcrypt.compare(userPassword, user.password);
    
    if(passwordCheck) {
      const token = await tokenGeneration(user.id, user.fullname, user.profileimagedir);
      res.cookie("token", token, {
        httpOnly: true,
      });
      console.log("logado")
      return res.redirect("/home");
    }
  } else {
    console.log("Usuário não encontrado")
    return res.redirect("/login")
  }
};

export { registerUser, loginUser };
