# Use Alpine as base image
FROM alpine:latest

# Set working directory
WORKDIR /app

# Install necessary packages
RUN apk add --no-cache curl tar

# Fetch the latest version dynamically, download, and extract Seanime to /app
RUN VERSION=$(curl -sSL https://github.com/5rahim/seanime/releases/latest/download/latest.json | \
    grep -oE '"version": "[^"]*' | cut -d'"' -f4) && \
    curl -sSLO https://github.com/5rahim/seanime/releases/latest/download/seanime-${VERSION}_Linux_x86_64.tar.gz && \
    tar -xzf seanime-${VERSION}_Linux_x86_64.tar.gz -C /app && \
    chmod +x /app/seanime && \
    rm seanime-${VERSION}_Linux_x86_64.tar.gz

# Expose the port
EXPOSE 43211

# Set default environment variables
ENV SEANIME_DATA_DIR="/data"
ENV SEANIME_SERVER_HOST="0.0.0.0"
ENV SEANIME_SERVER_PORT="43211"
ENV SEANIME_WORKING_DIR="/app"

# Create data directory
RUN mkdir -p "$SEANIME_DATA_DIR"

# Set the entrypoint and ensure it runs from /app
CMD ["/app/seanime"]
