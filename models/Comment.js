
import { sql } from "../database/db.js";

export const getCommentsByPostId = async (postId) => {
  try {
    const comments = await sql`SELECT * FROM comments WHERE postId = ${postId}`;
    return comments;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter comentários por postId');
  }
};

export const createComment = async (postId, content, userId) => {
  try {
    if (postId === undefined || content === undefined || userId === undefined) {
      throw new Error('Valores indefinidos ao criar comentário');
    }

    const result = await sql`
      INSERT INTO comments (postId, content, userId)
      VALUES (${postId}, ${content}, ${userId})
      RETURNING *
    `;
    
    return result[0];
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar comentário');
  }
};
