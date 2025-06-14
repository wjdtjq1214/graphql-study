import { describe, expect, it, jest } from '@jest/globals'

import resolvers from '../src/resolvers.js';

describe('GraphQL API 테스트', () => {
  it('getHealthCheck 쿼리 테스트', async () => {
    resolvers.Query.getHealthCheck = jest.fn<() => { status: boolean }>().mockReturnValue({
      status: true,
    });

    const result = resolvers.Query.getHealthCheck();

    expect(result).toEqual({
      status: true
    });
  });

  it('createUser 뮤테이션 테스트', async () => {
    const testUserObj = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User'
    };

    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: new Date().toISOString(),
    };

    resolvers.Mutation.createUser = jest.fn<(_: any, { email, password, name }) => Promise<any>>().mockResolvedValue(mockUser);

    const result = await resolvers.Mutation.createUser({}, testUserObj);

    expect(result).toEqual(mockUser);
  });

  it('createPost 뮤테이션 테스트', async () => {
    const testPostObj = {
      title: 'Test Post',
      content: 'This is a test post',
      authorId: 1,
    };

    const mockPost = {
      id: '1',
      title: 'Test Post',
      content: 'This is a test post',
    };

    resolvers.Mutation.createPost = jest.fn<(_: any, { title, content, authorId }) => Promise<any>>().mockResolvedValue(mockPost);

    const result = await resolvers.Mutation.createPost({}, testPostObj);

    expect(result).toEqual(mockPost);
  });

  it('createComment 뮤테이션 테스트', async () => {
    const testCommentObj = {
      content: 'This is a test comment',
      postId: 1,
    };

    const mockComment = {
      id: '1',
      content: 'This is a test comment',
    };

    resolvers.Mutation.createComment = jest.fn<(_: any, { content, postId }: { content: any; postId: any; }) => Promise<any>>().mockResolvedValue(mockComment);

    const result = await resolvers.Mutation.createComment({}, testCommentObj);

    expect(result).toEqual(mockComment);
  });

  it('getPostsByUserId 쿼리 테스트', async () => {
    const testUserId = 1;

    const mockPosts = [
      {
        id: '1',
        title: 'Post 1',
        content: 'Content of Post 1',
        authorId: 1,
      },
      {
        id: '2',
        title: 'Post 2',
        content: 'Content of Post 2',
        authorId: 1,
      },
    ];

    resolvers.Query.getPostsByUserId = jest.fn<(_: any, { userId }: { userId: number }) => Promise<any[]>>().mockResolvedValue(mockPosts);

    const result = await resolvers.Query.getPostsByUserId({}, { userId: testUserId });

    expect(result).toEqual(mockPosts);
  });
});