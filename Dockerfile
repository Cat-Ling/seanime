# Build stage
FROM alpine:latest AS builder
WORKDIR /app

RUN apk add --no-cache curl tar

RUN VERSION=$(curl -sSL https://github.com/5rahim/seanime/releases/latest/download/latest.json | \
    grep -oE '"version": "[^"]*' | cut -d'"' -f4) && \
    curl -sSLO https://github.com/5rahim/seanime/releases/latest/download/seanime-${VERSION}_Linux_x86_64.tar.gz && \
    tar -xzf seanime-${VERSION}_Linux_x86_64.tar.gz -C /app && \
    chmod +x /app/seanime && \
    rm seanime-${VERSION}_Linux_x86_64.tar.gz

# Download static FFmpeg binary
RUN curl -L -o /usr/local/bin/ffmpeg https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-i686-static.tar.xz && \
    tar -xf ffmpeg-release-i686-static.tar.xz --strip-components=1 -C /usr/local/bin && \
    rm ffmpeg-release-i686-static.tar.xz && \
    chmod +x /usr/local/bin/ffmpeg

# Final minimal runtime image
FROM gcr.io/distroless/static:latest
WORKDIR /app

# Copy only necessary files
COPY --from=builder /app/seanime /app/seanime
COPY --from=builder /usr/local/bin/ffmpeg /usr/local/bin/ffmpeg

EXPOSE 43211

# Environment variables
ENV SEANIME_DATA_DIR="/data"
ENV SEANIME_SERVER_HOST="0.0.0.0"
ENV SEANIME_SERVER_PORT="43211"
ENV SEANIME_WORKING_DIR="/app"

CMD ["/app/seanime"]
