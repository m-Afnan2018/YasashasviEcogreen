# Admin panel SPA, served standalone on its own port. Build from within admin/:
#   docker build --build-arg VITE_API_URL=http://your-backend-host:5000 -t ecogreen-admin .
# VITE_API_URL is a Vite env var, so it must be baked in at BUILD time (not
# passed at container runtime like a normal env var).

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_API_URL=http://localhost:5000
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD node -e "fetch('http://localhost:4000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["serve", "-s", "dist", "-l", "4000"]
