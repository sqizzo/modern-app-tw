# Build dari node 18
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Pakai nginx
FROM nginx:alpine

# Copy built files (/dist) from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5000
# Run pakai: docker run -d -p 5000:80 <image-name>

CMD ["nginx", "-g", "daemon off;"]
