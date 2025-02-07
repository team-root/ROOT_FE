FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM busybox:1.36-musl
WORKDIR /www
COPY --from=builder /app/dist .
RUN adduser -D static
USER static
EXPOSE 3000
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]
