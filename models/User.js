import { sql } from "../database/db.js";

// Inserting new user into the database
export const registerUserInDb = async (userId, fullName, username, userEmail, profilePhotoDir, hashedPassword) => {
  await sql`
    INSERT INTO users(id, fullname, username, email, password, profileimagedir)
    VALUES (${userId}, ${fullName}, ${username}, ${userEmail}, ${hashedPassword}, ${profilePhotoDir});
    `;
};

// Getting data from an existing user
export const getUserInDb = async (userData, searchType) => {
  try {
    return await sql`SELECT * FROM users WHERE ${sql(searchType)} = ${userData}`;
  } catch (err) {
    console.error(err);
  }
};

// Updating data for an existing user
export const updateUserInDb = async (userData, oldUsername) => {
  return await sql`UPDATE users SET username = ${userData.username}, fullname = ${userData.name}, profileimagedir = ${userData.profileimagedir}
  WHERE username = ${oldUsername} RETURNING *;` 
}

// Increasing XP for the user
export const addXpToUser = async (username, gainedXp) => {
  try {
    return await sql`
    UPDATE users
    SET xp = xp + ${username}
    WHERE username = ${gainedXp};
    `;
  } catch (err) {
    console.error(err);
  }
}
