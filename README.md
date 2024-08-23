# Multitenant SvelteKit App Demo

This project demonstrates a simple approach to creating a multitenant application using SvelteKit, leveraging the `reroute` hook for request routing.

## Key Features

The app uses hostname-based routing to direct requests to tenant-specific routes, with a shared layout and custom server-side logic.

## Project Structure

```
src/
├── ...
├── hooks.ts               # Contains reroute logic
├── routes/
│   ├── +layout.svelte     # Shared layout for all routes
│   ├── brand-one/         # Brand one routes
│   │   ├── +page.svelte
│   │   ├── about-us/
│   │   │   └── +page.svelte
│   │   └── blog/
│   │       └── +page.svelte
│   └── brand-two/         # Brand two routes
│       ├── +page.svelte
│       ├── about-us/
│       │   └── +page.svelte
│       └── blog/
│           └── +page.svelte
└── 
```

## How It Works

1. When a request comes in, the `reroute` hook examines the hostname.
2. Based on the hostname, it prepends the appropriate brand prefix to the URL path.
3. SvelteKit then routes the request to the corresponding tenant-specific page.

This approach allows you to serve multiple "brands" or tenants from a single SvelteKit application, with minimal code duplication and easy management of shared components and layouts.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the app via `http://localhost:5173` and `http://127.0.0.1:5173` to see different tenants

## Customization

To add more tenants or modify routing logic, update the `reroute` function in `src/hooks.ts` and create corresponding route folders in the `src/routes` directory.