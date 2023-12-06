import { sql } from "../database/db.js";

export const getAllCoursesInDb = async () => {
  try {
    return await sql`SELECT id, name, imgdir FROM courses;`;
  } catch (err) {
    console.log(err);
  }
};

export const getCourseData = async (courseId) => {
  try {
    return await await sql`SELECT 
    courses.id as course_id,
    courses.name as course_name,
    courses.description as course_description,
    courses.imgdir as course_imgdir,
    videos.id as video_id,
    videos.title as video_title,
    videos.description as video_description,
    videos.imgdir as video_imgdir
  FROM 
    courses
  JOIN 
    videos ON courses.id = videos.course_id
  WHERE 
    courses.id = ${courseId};`;
  } catch (err) {
    console.log(err);
  }
}
