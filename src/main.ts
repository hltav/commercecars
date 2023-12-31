import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = 3000

  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true, 
  })
  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

bootstrap()
