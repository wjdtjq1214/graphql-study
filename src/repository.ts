import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class Repository {
  async createUser(email: string, password: string, name: string): Promise<any> {
    try {
      return await prisma.user.create({
        data: {
          email,
          password,
          name,
        }
      });
    } catch (error) {
      console.error('Repository create user:', error);
      throw new Error(error);
    }
  }

  async createPost(title: string, content: string, authorId: number): Promise<any> {
    try {
      return await prisma.post.create({
        data: {
          title,
          content,
          authorId,
        }
      });
    } catch (error) {
      console.error('Repository create post:', error);
      throw new Error(error);
    }
  }

  async createComment(content: string, postId: number): Promise<any> {
    try {
      return await prisma.comment.create({
        data: {
          content,
          postId,
        }
      });
    } catch (error) {
      console.error('Repository create comment:', error);
      throw new Error(error);
    }
  }

  async getPostsByUserId(userId: number): Promise<any> {
    try {
      return await prisma.post.findMany({
        select: {
          id: true,
          title: true,
          content: true,
          published: true,
          author: {
            select: {
              id: true,
              email: true,
              name: true,
              createdAt: true,
            }
          },
          createdAt: true,
          comments: {
            select: {
              id: true,
              content: true,
              createdAt: true,
            }
          }
        },
        where: {
          authorId: userId,
          published: true,
          content: {
            contains: 'graphql'
          }
        }
      });
    } catch (error) {
      console.error('Repository get post by user id:', error);
      throw new Error(error);
    }
  }
}