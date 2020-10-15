# Nest GCP Serverless Accelerator

## Overview

This accelerator allows you to quickly deploy a Nest.js app to GCP serverless.

- Each function is treated as its own Nest app, with its own `nest-cli.json` and `tsconfig.json`
- Each function is built and deployed independently using npm scripts
- The local module is for running all functions side by side for local dev
  - The local module leverages `nest-router` to prefix all of your function's module routes with a string representing that functions path, similarly to how you would set up GCP functions under a domain

## Prerequisites

- Have `gcloud` cli installed, logged in, and set to the GCP project you want to deploy the function(s) too

## Adding a New Function

1. Duplicate the `functions/app` folder and replace all occurrences of `app` with your new function name
2. Confirm that the `function.ts` file is exporting your new function name
3. Import your new module into `local/local.module.ts`, and add it to the local module imports array
4. Edit `local/routes.ts` with your desired route path and new module
5. Edit `package.json` with new `build` and `deploy` scripts for your new functions, copying the example from `app`
