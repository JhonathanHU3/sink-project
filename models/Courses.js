import { sql } from "../database/db.js";

export const getAllCoursesInDb = async () => {
  try {
    return await sql`SELECT * FROM courses`;
  } catch (err) {
    console.log(err);
  }
};
