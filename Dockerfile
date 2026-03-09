# Stage 1: Build the React application
FROM node:20.0-alpine AS build

# Install git
RUN apk add --no-cache git

WORKDIR /app

# Copy dependency files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . ./

# Build the project
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
# We copy it to /my-portfolio because the Vite base URL is /my-portfolio/
COPY --from=build /app/build /usr/share/nginx/html/my-portfolio

# Copy custom nginx configuration to cleanly support SPA routing for subpath
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
