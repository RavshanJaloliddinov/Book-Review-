import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { appConfig } from './config/app.config';
import { dbConfig } from './config/database.config';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig, dbConfig]
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      try {
        return {
          dialect: 'postgres',
          host: config.get('database.host'),
          port: config.get<number>('database.port'),
          username: config.get('database.user'),
          password: config.get('database.password'),
          database: config.get('database.dbName'),
          synchronize: true,
          logging: console.log,
          autoLoadModels: true,
        };
      } catch (error) {
        console.log(error);
      }
    },
  }),
]
})

export class AppModule { }
