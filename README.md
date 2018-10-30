# Create React App w/ TypeScript & Docker

## Development

```bash
docker-compose up --build
```

## Production build

```bash
# Build container
docker build -t react-app .

# Run container with website available on localhost:8000
docker run -p 8000:80 react-app
```
