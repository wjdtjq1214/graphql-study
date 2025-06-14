## local 실행 방법

### 실행 환경
node: 23.10.0

### 실행 방법
```bash
# 디비 도커로 띄우기
docker compose -f docker-compose-local.yml --env-file ./.env/.env.docker-compose up -d

# 라이브러리 설치
npm install

# dotenv-cli 설치
npm install -g dotenv-cli

# 프로젝트 로컬에서 실행
npm run start:local
```

## image 생성 및 도커로 실행
```bash
# 프로젝트 이미지 빌드
docker build -t graphql-study/imzz ./

# 디비, 프로젝트 도커 실행
docker compose -f docker-compose-docker.yml --env-file ./.env/.env.docker-compose up -d
```

## playground 정보 및 API 명세
playground: localhost:4000
### API 명세
유저 생성
```
mutation {
  createUser(email: "test", password: "test", name: "test") {
    id
    email
    name
  }
}
```
게시글 작성
```
mutation {
  createPost(title: "test", content: "test", authorId: 1) {
    id
    title
    content
  }
}
```
댓글 작성
```
mutation {
  createComment(postId: 1, content: "test") {
    id
    content
  }
}
```
유저의 게시글과 게시글의 댓글 조회
```
query {
  getPostsByUserId (userId: 1) {
    id
    title
    content
    comments {
      id
      content
    }
  }
}
```