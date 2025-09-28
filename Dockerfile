FROM oven/bun:1.2-slim AS build

WORKDIR /app

COPY package.json /app/
COPY bun.lock /app/
RUN bun install --frozen-lockfile

COPY index* /app
COPY package.json /app
COPY public /app/public
COPY scripts /app/scripts
COPY src /app/src
COPY tsconfig* /app/
COPY vite* /app/

ENV NODE_ENV=production
RUN bun run build

FROM nginx:stable-otel AS serve

COPY --from=build /app/dist /var/www/html
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

RUN chown nginx:nginx /var/www/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
