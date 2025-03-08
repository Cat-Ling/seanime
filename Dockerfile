# Build stage
FROM alpine:latest AS builder
WORKDIR /app

RUN apk add --no-cache curl tar xz

RUN VERSION=$(curl -sSL https://github.com/5rahim/seanime/releases/latest/download/latest.json | \
    grep -oE '"version": "[^"]*' | cut -d'"' -f4) && \
    curl -sSLO https://github.com/5rahim/seanime/releases/latest/download/seanime-${VERSION}_Linux_x86_64.tar.gz && \
    tar -xzf seanime-${VERSION}_Linux_x86_64.tar.gz -C /app && \
    chmod +x /app/seanime && \
    rm seanime-${VERSION}_Linux_x86_64.tar.gz

# Download and extract static FFmpeg
RUN curl -L -o ffmpeg.tar.xz https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    mkdir -p /ffmpeg && \
    tar -xf ffmpeg.tar.xz --strip-components=1 -C /ffmpeg && \
    mv /ffmpeg/ffmpeg /usr/local/bin/ffmpeg && \
    chmod +x /usr/local/bin/ffmpeg && \
    rm -rf ffmpeg.tar.xz /ffmpeg

# Final minimal runtime image
FROM gcr.io/distroless/static:latest
WORKDIR /app

COPY --from=builder /app/seanime /app/seanime
COPY --from=builder /usr/local/bin/ffmpeg /usr/local/bin/ffmpeg

EXPOSE 43211

ENV SEANIME_DATA_DIR="/data"
ENV SEANIME_SERVER_HOST="0.0.0.0"
ENV SEANIME_SERVER_PORT="43211"
ENV SEANIME_WORKING_DIR="/app"

CMD ["/app/seanime"]
