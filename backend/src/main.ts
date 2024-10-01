import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  await app.listen(configService.get<number>("appConfig.port"), () => {
    console.log(`Listening on ${configService.get<number>("appConfig.port")}`)
  })
  await app.listen(3000);
}
bootstrap();
