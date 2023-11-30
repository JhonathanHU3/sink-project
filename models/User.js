import { sql } from "../database/db.js";

export const registerUserInDb = async (
  userId,
  fullName,
  username,
  userEmail,
  profilePhotoDir,
  hashedPassword
) => {
  await sql`
    INSERT INTO users(id, fullname, username, email, password, profileimagedir)
    VALUES (${userId}, ${fullName}, ${username}, ${userEmail}, ${hashedPassword}, ${profilePhotoDir});
    `;
};

export const getUserInDb = async (userData, searchType) => {
  try {
    return await sql`SELECT * FROM users WHERE ${sql(searchType)} = ${userData}`;
  } catch (err) {
    console.error(err);
  }
};


