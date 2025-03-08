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

# Final runtime image
FROM alpine:latest
WORKDIR /app

RUN apk add --no-cache ffmpeg

COPY --from=builder /app/seanime /app/seanime

EXPOSE 43211

ENV SEANIME_DATA_DIR="/data"
ENV SEANIME_SERVER_HOST="0.0.0.0"
ENV SEANIME_SERVER_PORT="43211"
ENV SEANIME_WORKING_DIR="/app"

RUN mkdir -p "$SEANIME_DATA_DIR"

CMD ["/app/seanime"]
