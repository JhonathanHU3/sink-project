import { sql } from "../database/db.js";

const registerUserInDb = async (
  userId,
  fullName,
  userEmail,
  profilePhotoDir,
  hashedPassword
) => {
  await sql`
    INSERT INTO users(id, fullname, email, password, profileimagedir)
    VALUES (${userId}, ${fullName}, ${userEmail}, ${hashedPassword}, ${profilePhotoDir});
    `;
};

const getUserInDb = async (userEmail) => {
  return await sql`SELECT * FROM users WHERE email = ${userEmail}`;
};

export { registerUserInDb, getUserInDb };
