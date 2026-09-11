# Public static site (output: "export"), served standalone. Build from within client/:
#   docker build --build-arg NEXT_PUBLIC_API_URL=http://your-backend-host:5000 -t ecogreen-client .
# NEXT_PUBLIC_API_URL is inlined by Next.js at BUILD time (not runtime).

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG NEXT_PUBLIC_API_URL=http://localhost:5000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/out ./out

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD node -e "fetch('http://localhost:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["serve", "out", "-l", "3000"]
