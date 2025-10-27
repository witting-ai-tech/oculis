# Use Debian-based Node.js image instead of Alpine for better canvas support
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Install system dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    build-essential \
    make \
    g++ \
    gcc \
    libc6-dev \
    pkg-config \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for node-gyp to find Python
ENV PYTHON=/usr/bin/python3
ENV PYTHONUNBUFFERED=1

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Node.js dependencies
RUN npm ci --verbose

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 80

# Start the application
CMD ["npm", "start"]