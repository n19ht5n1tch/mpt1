# Use the official Bun image
FROM oven/bun:1 as base

WORKDIR /app

# Copy package files first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the app source code
COPY . .

# Expose the port
EXPOSE 3001

# Command to run the app
CMD ["bun", "src/index.js"]