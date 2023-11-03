# Use an official Node.js runtime as a parent image
FROM node:8

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your frontend code to the working directory
COPY frontend/ ./

# Expose the port your Vite development server will run on
EXPOSE 3000

# Start your Vite development server
CMD ["npm", "run", "dev"]
