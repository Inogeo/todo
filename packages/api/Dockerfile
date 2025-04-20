FROM bitnami/python:latest

# Enable logging in console
ENV PYTHONUNBUFFERED=1

# Prepare rootless user
RUN adduser --disabled-password --gecos "" nonroot && \
    echo 'nonroot ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Set working directory
WORKDIR /app

# Copy whole sources
COPY --chown=nonroot:nonroot . .

# Install dependency with buildkit cache
RUN --mount=type=cache,target=/root/.cache/pip pip install .

# Create data dir used by SQLite DB
RUN mkdir -p /data 
RUN chown -R nonroot:nonroot /data

# Expose port
EXPOSE 8000

# Set user nonroot
USER nonroot

# Startup command
CMD ["fastapi", "run", "src/api/main.py", "--port", "8000", "--workers", "4", "--root-path", "/api/v1"]
