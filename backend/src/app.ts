import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { appConfig } from './config/app.config';
import { dbConfig } from './config/database.config';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig, dbConfig]
  })],
})

export class AppModule { }
