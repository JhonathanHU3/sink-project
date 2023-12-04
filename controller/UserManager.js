// Imports
import { randomUUID } from "node:crypto";
import { tokenGeneration } from "./TokenController.js";
import bcrypt from "bcrypt";
import * as User from "../models/User.js";
import { sql } from "../database/db.js";

// Function to obtain user data and generate a unique ID, random profile photo and then save it to the database
export const registerUser = async (req, res) => {
  const userId = randomUUID();
  const profilePhotoDir = `/img/profileImg/${Math.ceil(
    Math.random() * 10
  )}.jpg`;
  const fullName = req.body.fullname;
  const username = req.body.username;
  const userEmail = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    await User.registerUserInDb(
      userId,
      fullName,
      username,
      userEmail,
      profilePhotoDir,
      hashedPassword
    );
    return res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export const loginUser = async (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  let [user] = await User.getUserInDb(userEmail, "email");
  if (user) {
    const passwordCheck = await bcrypt.compare(userPassword, user.password);

    if (passwordCheck) {
      const token = await tokenGeneration(
        user.id,
        user.username,
        user.profileimagedir
      );
      res.cookie("token", token, {
        httpOnly: true,
      });
      console.log("logado");
      return res.redirect("/home");
    }
  } else {
    console.log("Usuário não encontrado");
    return res.redirect("/login");
  }
};

export const updateUser = async (req, res) => {
  try {
    const [userInDb] = User.getUserInDb(req.body.userId);
    if (userInDb) {
      const passwordCheck = await bcrypt.compare(
        req.body.password,
        userInDb.password
      );

      if (passwordCheck) {
        console.log(req.body)
        const updatedUserData = await User.updateUserInDb(req.body);
        res.clearCookie("token");

        const token = await tokenGeneration(
          updatedUserData.id,
          updatedUserData.username,
          updatedUserData.profileimagedir
        );

        res.cookie("token", token, {
          httpOnly: true,
        });

        return res.redirect(`/user/${updatedUser.username}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
