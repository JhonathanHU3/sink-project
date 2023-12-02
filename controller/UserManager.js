// Imports
import { randomUUID } from "node:crypto";
import { tokenGeneration } from "./TokenController.js";
import bcrypt from "bcrypt";
import * as User from "../models/User.js";
import { sql } from "../database/db.js";


// Function to obtain user data and generate a unique ID, random profile photo and then save it to the database
export const registerUser = async (req, res) => {
  const userId = randomUUID();
  const profilePhotoDir = `/img/profileImg/${Math.ceil(Math.random() * 10)}.jpg`;
  const fullName = req.body.fullname;
  const username = req.body.username;
  const userEmail = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    await User.registerUserInDb(userId, fullName, username, userEmail, profilePhotoDir, hashedPassword);
    return res.redirect("/login")
  } catch(err) {
    console.log(err)
    res.status(500).send();
  }
};

export const loginUser = async (req, res) => {
  const userEmail = req.body.email
  const userPassword = req.body.password

  let [user] = await User.getUserInDb(userEmail, "email")
  if(user) {
    const passwordCheck = await bcrypt.compare(userPassword, user.password);
    
    if(passwordCheck) {
      const token = await tokenGeneration(user.id, user.username, user.profileimagedir);
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

export const updateUser = async (req, res) => {
  const updatedUser = req.body;
  console.log(updatedUser)
  console.log(req.user)
  // Adicionar parte do código abaixo ao ../models/User.js!!!!
  await sql`UPDATE users SET username = ${updatedUser.username}, fullname = ${updatedUser.name}
  WHERE username = ${req.user.username};`

  // Erro ao tentar dar update em um usuário duas vezes consecutivas
  req.user.username = updatedUser.username;

  return res.redirect(`/user/${updatedUser.username}`);
}
