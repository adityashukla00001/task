# Use the official Node.js image as the base image
FROM node:12.22.9

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN curl -v https://registry.npmjs.com/
RUN npm i

# Copy the application files to the working directory
COPY . .

# Expose the port your Node.js application listens on
EXPOSE 3000

# Specify the command to run your Node.js application
CMD [ "node", "server.js" ]
