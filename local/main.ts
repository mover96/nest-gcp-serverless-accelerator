import { NestFactory } from '@nestjs/core'
import { LocalModule } from './local.module'

async function bootstrap() {
  const app = await NestFactory.create(LocalModule)
  await app.listen(3000)
}
bootstrap()
