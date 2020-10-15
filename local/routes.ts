import { Routes } from 'nest-router'
import { AppModule } from 'functions/app/app.module'

export const routes: Routes = [
  {
    path: '/app',
    module: AppModule,
  },
]
