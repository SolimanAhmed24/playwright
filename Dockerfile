# Dockerfile
FROM mcr.microsoft.com/playwright:v1.52.0-noble

WORKDIR /app
COPY . .

RUN npm ci

CMD ["npx", "playwright", "test"]
