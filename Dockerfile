FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY frontend/package.json frontend/vite.config.ts frontend/bun.lock ./frontend/
RUN cd frontend && bun install

COPY . .

RUN cd frontend && bun run build

FROM oven/bun:latest

WORKDIR /app

COPY --from=builder /app .

ENV DB_FILE_NAME=database.sqlite
ENV PORT=3000
ENV NODE_ENV=production

RUN bun install && bun run database

EXPOSE 3000

CMD ["bun", "run", "start"]