# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your backend code to the working directory
COPY backend/ ./

# Expose the port your Express app listens on
EXPOSE 3000

# Start your Express app
CMD ["npm", "start"]
