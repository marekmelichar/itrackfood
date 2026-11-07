# **Betrian React Starter Template**

## Installation

`npm install`

## To start app

`npm run start`

## To deploy to test or dev environment

change the `env.js` -> `window.BASE_API_URL` accordingly ( https://your-backend-api.dev.betrain.net )

## Deployment

### Docker Build

The application is containerized using Docker with a multi-stage build:

```bash
# Build the Docker image
docker build -t betrian-react-starter .

# Run locally
docker run -p 3000:80 betrian-react-starter
```
