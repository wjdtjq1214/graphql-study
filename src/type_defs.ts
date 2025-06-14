export default `
  type HealthCheck {
    status: Boolean
  }

  type User {
    id: String
    email: String
    name: String
    createdAt: String
  }

  type Comment {
    id: String
    content: String
    createdAt: String
  }

  type Post {
    id: String
    title: String
    content: String
    author: User
    comments: [Comment]
  }

  type Query {
    getHealthCheck: HealthCheck

    getPostsByUserId(
      userId: Int
    ): [Post]
  }

  type Mutation {
    createUser(
      email: String,
      password: String,
      name: String
    ): User

    createPost(
      title: String,
      content: String,
      authorId: Int
    ): Post

    createComment(
      content: String,
      postId: Int
    ): Comment
  }
`;