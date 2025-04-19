FROM bitnami/python:latest

# Enable logging in console
ENV PYTHONUNBUFFERED=1

# Add non root user
RUN adduser --disabled-password --gecos "" nonroot && \
    echo 'nonroot ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Set working directory
WORKDIR /app

# Copy file to directory
COPY --chown=nonroot:nonroot . .

# Install dependency
RUN pip install .

# Expose port
EXPOSE 8000

# Set user nonroot
USER nonroot

# Startup command
CMD ["fastapi", "run", "src/api/main.py", "--port", "8000", "--workers", "4"]
