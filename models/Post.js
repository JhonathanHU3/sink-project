import { sql } from "../database/db.js";

export const getAllPosts = async () => {
  try {
    const posts = await sql`
      SELECT posts.*, users.username, users.profileimagedir
      FROM posts
      JOIN users ON posts.user_id = users.id`;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter postagens');
  }
};

export const createPost = async (title, content, userId, classId,) => {
  try {
<<<<<<< Updated upstream
    const result = await sql`INSERT INTO posts (title, content, userid, classid) VALUES (${title}, ${content}, ${userId}, ${classId}) RETURNING *`;
=======
    const result = await sql`
    INSERT INTO posts (title, content, user_id, class_id) 
    VALUES (${title}, ${content}, ${userId}, ${classId}) 
    RETURNING *;`;

>>>>>>> Stashed changes
    return result[0];
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar postagem');
  }
};

export const getPostsByClassId = async (classId) => {
  try {
    if (classId === undefined) {
      throw new Error('classId não pode ser undefined');
    }
    classId = classId.substring(1);
    const posts = await sql`SELECT * FROM posts WHERE classid = ${classId}`;
    console.log(classId)
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter postagens por classId');
  }
};

