import { sql } from "../database/db.js";

const registerUserInDb = async (
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

const getUserInDb = async (userEmail) => {
  return await sql`SELECT * FROM users WHERE email = ${userEmail}`;
};

export { registerUserInDb, getUserInDb };
