// This file is for GCP serverless
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import { AppModule } from './app.module'

import * as express from 'express'

// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<express.Express> {
  const expressApp = express()
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  )
  await nestApp.init()
  return expressApp
}

let cachedApp: express.Express
const app = async (req: express.Request, res: express.Response) => {
  if (!cachedApp) {
    cachedApp = await bootstrapServer()
  }
  return await cachedApp(req, res)
}

export { app }
