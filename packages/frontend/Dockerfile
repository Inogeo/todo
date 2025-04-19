FROM bitnami/node:latest

# Add non root user
RUN adduser --disabled-password --gecos "" nonroot && \
    echo 'nonroot ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Set user nonroot
USER nonroot

# Set working directory
WORKDIR /app

# Copy file to directory
COPY --chown=nonroot:nonroot . .

# Install dependencies
RUN yarn install

# Expose port
EXPOSE 5173

CMD ["yarn", "dev", "--host"]