# Use an official Node runtime as a parent image
FROM node:11.7.0-slim

# Set the working directory to /app
WORKDIR /app

# Copy both package files
COPY package*.json ./

# Install packages
RUN npm install

# bundle app inside the Docker image
COPY . .

# Make port 3000 available to anything outside this container
EXPOSE 3000

# Run app.js
CMD ["npm", "start"]