# Base image
FROM cypress/base:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci

# Copy the rest of the project files
COPY . .

# Run Cypress tests
CMD ["npm", "run", "cypress"]
