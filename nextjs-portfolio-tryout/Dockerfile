# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18.2.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# 의존성 설치를 위해 package.json, yarn.lock 파일을 복사해서 컨테이너에 넣는다.
COPY package.json .
COPY yarn.lock .

# 의존성 설치
RUN yarn install

# 나머지 싹 다 복사
COPY . .

# next.js 빌드
RUN yarn build

# 컨테이너 포트 번호 설정
EXPOSE 3000

# 어플리케이션 실행
CMD ["yarn", "dev"]

