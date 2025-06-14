import { afterEach, describe, expect, it, jest } from '@jest/globals'

import { Repository } from '../src/repository.js';

const repository = new Repository();

describe('Repository 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks(); // 각 테스트 후 Mock 초기화
  });

  it('createUser 메서드 테스트', async () => {
    const mockUser = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedpassword',
      name: 'Test User',
      createdAt: new Date(),
    };

    jest.spyOn(repository, 'createUser').mockResolvedValue(mockUser);

    const result = await repository.createUser(
      'test@example.com',
      'hashedpassword',
      'Test User'
    );

    expect(result).toEqual(mockUser);
  });

  // it('createPost 메서드 테스트', async () => {
  //   const mockPost = {
  //     id: 1,
  //     title: 'Test Post',
  //     content: 'This is a test post',
  //     authorId: 1,
  //     createdAt: new Date(),
  //     published: true,
  //   };

  //   mockPrisma.post.create.mockResolvedValue(mockPost);

  //   const result = await repository.createPost(
  //     'Test Post',
  //     'This is a test post',
  //     1
  //   );

  //   expect(mockPrisma.post.create).toHaveBeenCalledTimes(1);
  //   expect(mockPrisma.post.create).toHaveBeenCalledWith({
  //     data: {
  //       title: 'Test Post',
  //       content: 'This is a test post',
  //       authorId: 1,
  //     },
  //   });
  //   expect(result).toEqual(mockPost);
  // });

  // it('createComment 메서드 테스트', async () => {
  //   const mockComment = {
  //     id: 1,
  //     content: 'This is a test comment',
  //     postId: 1,
  //     createdAt: new Date(),
  //   };

  //   mockPrisma.comment.create.mockResolvedValue(mockComment);

  //   const result = await repository.createComment(
  //     'This is a test comment',
  //     1
  //   );

  //   expect(mockPrisma.comment.create).toHaveBeenCalledTimes(1);
  //   expect(mockPrisma.comment.create).toHaveBeenCalledWith({
  //     data: {
  //       content: 'This is a test comment',
  //       postId: 1,
  //     },
  //   });
  //   expect(result).toEqual(mockComment);
  // });

  // it('getPostsByUserId 메서드 테스트', async () => {
  //   const mockPosts = [
  //     {
  //       id: 1,
  //       title: 'GraphQL Post',
  //       content: 'This is a GraphQL post',
  //       published: true,
  //       authorId: 1,
  //       author: {
  //         id: 1,
  //         email: 'author@example.com',
  //         name: 'Author Name',
  //         createdAt: new Date(),
  //       },
  //       createdAt: new Date(),
  //       comments: [
  //         {
  //           id: 1,
  //           content: 'This is a comment',
  //           createdAt: new Date(),
  //         },
  //       ],
  //     },
  //   ];

  //   mockPrisma.post.findMany.mockResolvedValue(mockPosts);

  //   const result = await repository.getPostsByUserId(1);

  //   expect(mockPrisma.post.findMany).toHaveBeenCalledTimes(1);
  //   expect(mockPrisma.post.findMany).toHaveBeenCalledWith({
  //     select: {
  //       id: true,
  //       title: true,
  //       content: true,
  //       published: true,
  //       author: {
  //         select: {
  //           id: true,
  //           email: true,
  //           name: true,
  //           createdAt: true,
  //         },
  //       },
  //       createdAt: true,
  //       comments: {
  //         select: {
  //           id: true,
  //           content: true,
  //           createdAt: true,
  //         },
  //       },
  //     },
  //     where: {
  //       authorId: 1,
  //       published: true,
  //       content: {
  //         contains: 'graphql',
  //       },
  //     },
  //   });
  //   expect(result).toEqual(mockPosts);
  // });
});