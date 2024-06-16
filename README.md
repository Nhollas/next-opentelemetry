# Next Telemetry Project Setup

This project is a Next.js application with OpenTelemetry integration for tracing and metrics collection. It uses Jaeger and OpenTelemetry Collector for tracing data visualization and collection.

## Prerequisites

- Node.js (version 14 or later)
- Docker and Docker Compose
- yarn or npm

## Installation

1. Clone the repository to your local machine.

2. Install the dependencies by running:

```sh
yarn install
```

or if you are using npm:

```sh
npm install
```

3. Start the Jaeger and OpenTelemetry Collector services using Docker Compose:

```sh
docker-compose -f infra/docker-compose.yaml up -d
```

This will start the necessary tracing infrastructure in the background.

## Viewing Jaeger Trace UI

To view the Jaeger Trace UI, open your browser and navigate to

`http://localhost:16686`.

## Additional Information

- The application's configuration can be found in [`next.config.mjs`](next.config.mjs).
- TypeScript configuration is specified in [`tsconfig.json`](tsconfig.json).
- For styling, Tailwind CSS is configured in [`tailwind.config.ts`](tailwind.config.ts).
- Docker services for Jaeger and OpenTelemetry Collector are defined in [`infra/docker-compose.yaml`](infra/docker-compose.yaml).

For more details on the project structure and components, refer to the individual files and directories in the repository.
