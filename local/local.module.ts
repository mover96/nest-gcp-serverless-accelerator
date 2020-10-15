import { Module } from '@nestjs/common'
import { RouterModule } from 'nest-router'

import { AppModule } from '../functions/app/app.module'
import { routes } from './routes'

@Module({
  imports: [RouterModule.forRoutes(routes), AppModule],
})
export class LocalModule {}
